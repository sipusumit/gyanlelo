import '../styles/globals.css'
import '../styles/scroll.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return <>
      <NextNProgress 
        color='yellow'
        options={{showSpinner: false}}
      />
      <Component {...pageProps} />
    </>
}

export default MyApp
