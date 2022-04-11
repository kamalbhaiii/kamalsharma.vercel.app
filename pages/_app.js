import Footer from '../Components/Footer'
import MainFooter from '../Components/MainFooter'
import Navbar from '../Components/Navbar'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    <MainFooter/>
    </>
  )
}

export default MyApp
