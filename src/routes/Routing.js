import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";
import ProductData from "../components/ProductData";
const Routing = () => {

    return (
        <BrowserRouter>
        <nav>
            <Routes>
                <Route path="/"  element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<ProductData/>}/>
            </Routes>
        </nav>
        </BrowserRouter>
    )   }


export default Routing;