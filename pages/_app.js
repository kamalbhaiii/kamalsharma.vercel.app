import Footer from '../Components/Footer'
import MainFooter from '../Components/MainFooter'
import Header from '../Components/Header'
import '../styles/tailwind.css'
import Head from 'next/head'
// import '../styles/globals.css'
// import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    <MainFooter/>
    </div>
  )
}

export default MyApp
