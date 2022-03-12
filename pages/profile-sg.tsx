import React, { useState} from 'react'
import Layout from 'components/Layout'
import useUser from 'lib/useUser'
import Modal from "components/Modal";
import Link from "next/link";
import AddPasswordModal from "components/AddPasswordModal";
import fetchJson, {FetchError} from "lib/fetchJson";
import {useRouter} from "next/router";

export default function SgProfile() {
    let {user} = useUser({
        redirectTo: '/login',
    })
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath);

    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
    const [showAddPasswordModal, setShowAddPasswordModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isShowToast, setIsShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const handleShowChangePasswordModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorMessage('')
        setSuccessMessage('')
        setShowChangePasswordModal(true);
    }

    const handleCloseChangePasswordModal = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        setShowChangePasswordModal(false);
    }

    const handleShowAddPasswordModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorMessage('')
        setSuccessMessage('')
        setShowAddPasswordModal(true);
    }

    const handleCloseAddPasswordModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowAddPasswordModal(false);
    }

    const showToast = (message: string) => {
        setIsShowToast(true);
        setToastMessage(message);
    }

    const handleAddPasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('')
        setSuccessMessage('')
        const {web_address, login, password, description} = e.currentTarget;

        const body = {
            web_address: web_address.value,
            login: login.value,
            password: password.value,
            description: description.value
        }
        try {
            const result: any = await fetchJson('/api/addPassword', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
            setSuccessMessage(result.message);
            showToast(result.message);
            setTimeout(() => {
                setIsShowToast(false);
            }, 1000);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            if (error instanceof FetchError) {
                setErrorMessage(error.data.message)
            } else {
                console.error('An unexpected error happened:', error)
            }
        }
    }

    const handleChangePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('')
        setSuccessMessage('')
        const {new_password, new_password_confirm} = e.currentTarget;

        const body = {
            new_password: new_password.value,
            new_password_confirm: new_password_confirm.value,
        }
        try {
                const result: any = await fetchJson('/api/changePassword', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body),
                })
            setSuccessMessage(result.message);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            if (error instanceof FetchError) {
                setErrorMessage(error.data.message)
            } else {
                console.error('An unexpected error happened:', error)
            }
        }
    }

    return (
        <Layout>
            {user && (
                <>
                    <h2 className="slds-text-heading--medium slds-text-align--center">Hello {user.login}!</h2>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <div className="slds-align_absolute-center">
                        <button className="slds-m-around_small slds-button slds-button_brand"
                                onClick={(e) => handleShowChangePasswordModal(e)}>Change password
                        </button>
                        <button className="slds-m-around_small slds-button slds-button_brand"
                                onClick={(e) => handleShowAddPasswordModal(e)}>Add password
                        </button>
                        <Link href="/your-passwords">
                            <button className="slds-m-around_small slds-button slds-button_brand">Show saved passwords
                            </button>
                        </Link>
                    </div>
                </>
            )}
            <AddPasswordModal show={showAddPasswordModal} handleClose={handleCloseAddPasswordModal}
                              onSubmit={e => handleAddPasswordSubmit(e)}
                              errorMessage={errorMessage} successMessage={successMessage}/>

            <form onSubmit={handleChangePasswordSubmit}>
                <Modal headerText="Change password" show={showChangePasswordModal}
                       handleClose={handleCloseChangePasswordModal} footer={(
                    <div className="slds-modal__footer">
                        <button className="slds-button slds-button_neutral" aria-label="Cancel and close"
                                onClick={handleCloseChangePasswordModal}>
                            Cancel
                        </button>
                        <button className="slds-button slds-button_brand" type="submit">Save</button>
                    </div>
                )}>
                    <div className="slds-form-element slds-p-around--x-small">
                        <label className="slds-form-element__label" htmlFor="new-password-element">New Password</label>
                        <div className="slds-form-element__control">
                            <input type="password" id="new-password-element" name="new_password" required
                                   className="slds-input"/>
                        </div>
                    </div>
                    <div className="slds-form-element slds-p-around--x-small">
                        <label className="slds-form-element__label" htmlFor="new-password-confirm-element">Confirm new
                            password</label>
                        <div className="slds-form-element__control">
                            <input type="password" id="new-password-confirm-element" name="new_password_confirm"
                                   required
                                   className="slds-input"/>
                        </div>
                    </div>
                    {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
                    {successMessage && <p className="slds-text-color_success">{successMessage}</p>}
                </Modal>
            </form>
        </Layout>
    )
}
