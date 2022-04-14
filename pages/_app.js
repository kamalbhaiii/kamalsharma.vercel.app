import Footer from '../Components/Footer'
import MainFooter from '../Components/MainFooter'
// import Navbar from '../Components/Navbar'
import '../styles/tailwind.css'
import Head from 'next/head'
// import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    {/* <Navbar/> */}
    <Component {...pageProps} />
    <Footer/>
    <MainFooter/>
    </div>
  )
}

export default MyApp
