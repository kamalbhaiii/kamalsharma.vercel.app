import Footer from '../Components/Footer'
import MainFooter from '../Components/MainFooter'
import Header from '../Components/Header'
import '../styles/tailwind.css'
import Head from 'next/head'
import Script from 'next/script'

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
      src={`https://www.googletagmanager.com/gtag/js?id=G-H2CC5EGW88`}
    />
    <Script strategy='lazyOnload' id="analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-H2CC5EGW88');
      `}
    </Script>
    <Script src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-625988a0c4086893`}></Script>
    </div>
  )
}

export default MyApp