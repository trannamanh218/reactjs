import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Detail from "../pages/Detail"
import Homepage from "../pages/Homepage"
import Product from "../pages/Product"

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="Product" element={<Product/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
            <Route path="Product/:id" element={<Detail/>}></Route>
        </Routes>
    )
}
export default Main