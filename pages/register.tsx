import React, {useState} from 'react'
import useUser from 'lib/useUser'
import Layout from 'components/Layout'
import fetchJson, {FetchError} from 'lib/fetchJson'
import RegisterForm from "components/RegisterForm";

export default function Register() {
    // here we just check if user is already logged in and redirect to profile
    const {mutateUser} = useUser({
        redirectTo: '/profile-sg',
        redirectIfFound: true,
    })
    const [errorMsg, setErrorMsg] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    return (
        <Layout>
            <div className="login">
                <RegisterForm
                    errorMessage={errorMsg}
                    successMessage={successMessage}
                    onSubmit={async function handleSubmit(event) {
                        event.preventDefault()
                        setSuccessMessage('')
                        setErrorMsg('')


                        const {login, password, password_confirm, is_password_kept_as_hash} = event.currentTarget;

                        if (password.value !== password_confirm.value) {
                            setErrorMsg(`Passwords aren't the same.`)
                            return
                        }

                        const body = {
                            login: login.value,
                            password: password.value,
                            isPasswordKeptAsHash: is_password_kept_as_hash.checked
                        }

                        try {
                            const result: any = await fetchJson('/api/register', {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(body)
                            })
                            setSuccessMessage(result.message)
                            // @ts-ignore
                            event.target.reset();
                        } catch (error) {
                            if (error instanceof FetchError) {
                                setErrorMsg(error.data.message)
                            } else {
                                console.error('An unexpected error happened:', error)
                            }
                        }
                    }}
                />
            </div>
            <style jsx>{`
              .login {
                max-width: 21rem;
                margin: 0 auto;
                padding: 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
              }
            `}</style>
        </Layout>
    )
}
