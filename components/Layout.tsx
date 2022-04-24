import Head from 'next/head'
import Header from 'components/Header'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Password Wallet</title>
      </Head>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        }

        .container {
          max-width: 65rem;
          margin: 1.5rem auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>
      <Header />

      <main>
        <div className="container">
            <div>
                <h1 className="slds-text-heading_large slds-text-align--center slds-p-around--medium">Bezpieczeństwo systemów informatycznych<br/>Password wallet app</h1>
            </div>
            {children}
        </div>
      </main>
    </>
  )
}
