import Footer from "./Footer"
import Navbarcompo from "./Navbarcompo"


const Layout = ({children}) => {
  return (
    <>
      <Navbarcompo/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout