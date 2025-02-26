import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { About, Home } from "../pages"
const Projectroutes = () => {
  return (
    <>
     <Router>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default Projectroutes