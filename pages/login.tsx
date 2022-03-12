import React, {FormEvent, useState} from 'react'
import useUser from 'lib/useUser'
import Layout from 'components/Layout'
import LoginForm from 'components/LoginForm'
import fetchJson, {FetchError} from 'lib/fetchJson'

export default function Login() {
    // here we just check if user is already logged in and redirect to profile
    const {mutateUser} = useUser({
        redirectTo: '/profile-sg',
        redirectIfFound: true,
    })

    const [errorMsg, setErrorMsg] = useState('')

    return (
        <Layout>
            <div className="login">
                <LoginForm
                    errorMessage={errorMsg}
                    onSubmit={async function handleSubmit(event: FormEvent<HTMLFormElement>) {
                        event.preventDefault()
                        setErrorMsg('')
                        const {login, password} = event.currentTarget;

                        const body = {
                            login: login.value,
                            password: password.value
                        }

                        try {
                            await mutateUser(
                                await fetchJson('/api/login', {
                                    method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(body),
                                })
                            )
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
