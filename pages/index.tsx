import Layout from 'components/Layout'
import useUser from "lib/useUser";
import React from "react";

export default function Home() {
    const { user } = useUser()

    return (
    <Layout>
        {user?.isLoggedIn && (
            <h2 className="slds-text-heading--medium slds-text-align--center">Hello {user.login}!</h2>
        )}
    </Layout>
  )
}
