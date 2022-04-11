import Navbar from '../Components/Navbar'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
