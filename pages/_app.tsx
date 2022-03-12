import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import fetchJson from 'lib/fetchJson'
import '../global-css/salesforce-lightning-design-system-2.17.5/assets/styles/salesforce-lightning-design-system.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
