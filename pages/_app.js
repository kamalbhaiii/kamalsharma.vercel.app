import Footer from '../Components/Footer'
import MainFooter from '../Components/MainFooter'
import Header from '../Components/Header'
import '../styles/tailwind.css'
import Head from 'next/head'
import Script from 'next/script'
// import '../styles/globals.css'


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
    <Script
      strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_KEY}`}
    />
    <Script strategy='lazyOnload'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.ANALYTICS_KEY});
      `}
    </Script>
    </div>
  )
}

export default MyApp