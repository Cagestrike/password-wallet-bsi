import React, {useState} from "react";
import fetchJson, {FetchError} from "../lib/fetchJson";
import Modal from "@/components/Modal";
import {useRouter} from "next/router";

export default function WalletEntry({
                                        password,
                                    }: {
    password: any,
}) {
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath);

    const [isDecrypted, setIsDecrypted] = useState(false)
    const [decryptedPassword, setDecryptedPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
    const [passwordHistory, setPasswordHistory] = useState(null)
    const [showHistoryModal, setShowHistoryModal] = useState(false)

    const handleShowChangePasswordModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowChangePasswordModal(true);
    }

    const handleCloseHistoryModal = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        setShowHistoryModal(false);
        setSuccessMessage('')
        setErrorMessage('')
    }

    const handleShowHistoryModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const result: any = await fetchJson('/api/showPasswordHistory/' + password.id, {
            method: 'GET',
        })
        setPasswordHistory(result.passwordHistory);
        setErrorMessage('');
        setErrorMessage('')
        setShowHistoryModal(true);
    }

    const handleCloseChangePasswordModal = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        setShowChangePasswordModal(false);
        setErrorMessage('')
        setSuccessMessage('')
    }

    const handleChangePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('')
        setSuccessMessage('')
        const {new_password} = e.currentTarget;
        const body = {
            new_password: new_password.value,
        }
        try {
            const result: any = await fetchJson('/api/changeSavedPassword/' + password.id, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
            setShowChangePasswordModal(false);
            await refreshData();
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

    const encrypt = () => {
        setIsDecrypted(false);
        setDecryptedPassword('');
    }

    const rollbackHistory = async (e: React.MouseEvent<HTMLButtonElement>, history: any) => {
        try {
            setSuccessMessage('');
            setErrorMessage('');
            const body = {
                historyId: history.id,
                modifiedRecordId: history.id_modified_record
            }
            const result: any = await fetchJson('/api/rollbackPassword', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            })
            const passwordHistory: any = await fetchJson('/api/showPasswordHistory/' + password.id, {
                method: 'GET',
            })
            setPasswordHistory(passwordHistory.passwordHistory);
            await refreshData();
            setSuccessMessage(result.message);
        } catch (error) {
            if (error instanceof FetchError) {
                setErrorMessage(error.data.message)
            } else {
                console.error('An unexpected error happened:', error)
            }
        }
    }

    const decrypt = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const result: any = await fetchJson(`/api/decryptPassword/${password.id}`, {
                method: 'GET',
            })
            setIsDecrypted(true)
            setDecryptedPassword(result.decryptedPassword);
        } catch (error) {
            if (error instanceof FetchError) {
                setErrorMessage(error.data.message)
            } else {
                console.error('An unexpected error happened:', error)
            }
        }
    }

    return (
        <article className="slds-card">
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <div className="slds-media__body">
                        <h2 className="slds-card__header-title">
                            <a href="#" className="slds-card__header-link slds-truncate" title="Accounts">
                                <span>{password.web_address}</span>
                                {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
                            </a>
                        </h2>
                    </div>
                    <div className="slds-no-flex">
                        <button className="slds-button slds-button_neutral"
                                onClick={(e) => handleShowChangePasswordModal(e)}>Update password
                        </button>
                        <button className="slds-button slds-button_neutral"
                                onClick={(e) => handleShowHistoryModal(e)}>Show History
                        </button>
                        {
                            !isDecrypted ?
                                (<button className="slds-button slds-button_neutral"
                                         onClick={(e) => decrypt(e)}>Decrypt</button>)
                                : (<button className="slds-button slds-button_neutral" onClick={encrypt}>Hide</button>)
                        }
                    </div>
                </header>
            </div>
            <div className="slds-card__body slds-card__body_inner">
                <div className="slds-form" role="list">
                    <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                            <div className="slds-form-element slds-form-element_stacked slds-is-editing">
                                <label className="slds-form-element__label" htmlFor="stacked-form-element-id-01">
                                    Login
                                </label>
                                <div className="slds-form-element__control">
                                    <input type="text" id="stacked-form-element-id-01" readOnly
                                           className="slds-input" value={password.login}/>
                                </div>
                            </div>
                        </div>
                        <div className="slds-form__item" role="listitem">
                            <div className="slds-form-element slds-form-element_stacked slds-is-editing">
                                <label className="slds-form-element__label" htmlFor="stacked-combobox-id-01"
                                       id="combobox-label-id-18">Password</label>
                                <div className="slds-form-element__control">
                                    <div className="slds-combobox_container">
                                        <div
                                            className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                                            <div
                                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right">
                                                <input type="text"
                                                       className="slds-input slds-combobox__input slds-combobox__input-value"
                                                       readOnly
                                                       value={isDecrypted ? decryptedPassword : password.password}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slds-form__row">
                        <div className="slds-form__item" role="listitem">
                            <div
                                className="slds-form-element slds-form-element_stacked slds-is-editing slds-form-element_1-col">
                                <label className="slds-form-element__label"
                                       htmlFor="stacked-form-element-id-14">Description</label>
                                <div className="slds-form-element__control">
                                    <input type="text"
                                           className="slds-input slds-combobox__input slds-combobox__input-value"
                                           readOnly
                                           value={password.description}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleChangePasswordSubmit}>
                <Modal headerText={'Change password for ' + password.web_address} show={showChangePasswordModal}
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
                    {errorMessage && <p className="slds-text-color_destructive">{errorMessage}</p>}
                    {successMessage && <p className="slds-text-color_success">{successMessage}</p>}
                </Modal>
            </form>

            <Modal headerText={'Password history for ' + password.web_address} show={showHistoryModal}
                   handleClose={handleCloseHistoryModal} footer={(
                <div className="slds-modal__footer">
                    {errorMessage && <p className="slds-text-color_destructive slds-align_absolute-center">{errorMessage}</p>}
                    {successMessage && <p className="slds-text-color_success slds-align_absolute-center">{successMessage}</p>}
                    <button className="slds-button slds-button_neutral" aria-label="Cancel and close"
                            onClick={handleCloseHistoryModal}>
                        Cancel
                    </button>
                </div>
            )}>
                {passwordHistory && (
                    passwordHistory.map((history: any) => (
                        <>
                            <article className="slds-card slds-color__background_gray-3">
                                <div className="slds-card__header slds-grid">
                                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                                        <div className="slds-media__body">
                                            <h2 className="slds-card__header-title">
                                                <a href="#" className="slds-card__header-link slds-truncate">
                                                    <span>{history.action_type}</span>
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="slds-no-flex">
                                            <button className="slds-button slds-button_neutral" onClick={(e) => rollbackHistory(e, history)}>Rollback to <b>&nbsp;previous value</b></button>
                                        </div>
                                    </header>
                                </div>
                                <div className="slds-card__body slds-card__body_inner">
                                    <div className="slds-form" role="list">
                                        <div className="slds-form__row">
                                            <div className="slds-form__item" role="listitem">
                                                <div
                                                    className="slds-form-element slds-form-element_stacked slds-is-editing">
                                                    <label className="slds-form-element__label"
                                                           htmlFor="stacked-form-element-id-01">
                                                        Previous value
                                                    </label>
                                                    <div className="slds-form-element__control">
                                                        <input type="text" id="stacked-form-element-id-01" readOnly
                                                               className="slds-input" value={history.previous_value_of_record}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slds-form__item" role="listitem">
                                                <div
                                                    className="slds-form-element slds-form-element_stacked slds-is-editing">
                                                    <label className="slds-form-element__label"
                                                           htmlFor="stacked-combobox-id-01"
                                                           id="combobox-label-id-18">Current value</label>
                                                    <div className="slds-form-element__control">
                                                        <div className="slds-combobox_container">
                                                            <div
                                                                className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click">
                                                                <div
                                                                    className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right">
                                                                    <input type="text"
                                                                           className="slds-input slds-combobox__input slds-combobox__input-value"
                                                                           readOnly
                                                                           value={history.present_value_of_record}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slds-form__row">
                                            <div className="slds-form__item" role="listitem">
                                                <div
                                                    className="slds-form-element slds-form-element_stacked slds-is-editing slds-form-element_1-col">
                                                    <label className="slds-form-element__label"
                                                           htmlFor="stacked-form-element-id-14">Timestamp</label>
                                                    <div className="slds-form-element__control">
                                                        <input type="text"
                                                               className="slds-input slds-combobox__input slds-combobox__input-value"
                                                               readOnly
                                                               value={history.timestamp}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            </>
                        )
                    ))
                }
            </Modal>
        </article>
    )
}
