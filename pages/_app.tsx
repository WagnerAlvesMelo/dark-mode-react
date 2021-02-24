import '../styles/globals.tsx'
import Providers from '../config/ThemeProvider'
import GlobalStyles from '../styles/globals'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Providers>
      <GlobalStyles />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
