import React, {FormEvent, MouseEventHandler, useState} from 'react'
import Layout from 'components/Layout'
import useUser from 'lib/useUser'
import AddPasswordModal from "components/AddPasswordModal";
import fetchJson, {FetchError} from "lib/fetchJson";
import {prisma} from 'lib/prisma';
import {sessionOptions} from 'lib/session'
import { withIronSessionSsr } from 'iron-session/next'
import { useRouter } from 'next/router';
import WalletEntry from "../components/WalletEntry";



export default function YourPasswords({data} : {data: any}) {
    let {user} = useUser({
        redirectTo: '/login',
    })

    const router = useRouter()
    const refreshData = () => router.replace(router.asPath);

    const [showAddPasswordModal, setShowAddPasswordModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleShowAddPasswordModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setErrorMessage('')
        setSuccessMessage('')
        setShowAddPasswordModal(true);
    }

    const handleCloseAddPasswordModal = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        setShowAddPasswordModal(false);
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
            setSuccessMessage(result.message)
            // @ts-ignore
            e.target.reset();
            await refreshData()
            handleCloseAddPasswordModal(null);
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
                    <h2 className="slds-text-heading--medium slds-text-align--center">Your passwords</h2>
                    <div className="slds-align_absolute-center">
                        <button className="slds-m-around_small slds-button slds-button_brand"
                                onClick={(e) => handleShowAddPasswordModal(e)}>Add password
                        </button>
                    </div>
                    {data.map((password: any) => (
                        <WalletEntry password={password} />
                    ))}
                </>
            )}
            <AddPasswordModal show={showAddPasswordModal} handleClose={handleCloseAddPasswordModal}
                              onSubmit={e => handleAddPasswordSubmit(e)}
                              errorMessage={errorMessage} successMessage={successMessage}/>
        </Layout>
    )
}

export const getServerSideProps = withIronSessionSsr(async function ({
                                                                         req,
                                                                         res,
                                                                     }) {
        const user = req.session.user

        if (!user || !user.isLoggedIn) {
            res.setHeader('location', '/login')
            return {
                props: {
                    data: {message: 'Session expired.'}
                },
            }
        }
            const passwords = await prisma.$queryRaw`
                SELECT * FROM Password
                WHERE id_user = ${user.id}
            `
        return {
            props: {data: passwords},
        }
    },
    sessionOptions)

