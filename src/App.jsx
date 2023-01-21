import React from "react";
import {Route, Routes} from 'react-router-dom';

import Header from './Components/Header';
import Footer from "./Components/Footer";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Product from "./pages/Product"
import api from "./Api";

export const Ctx = React.createContext()

export default () => {

    const [products, setProducts] = React.useState([])

    React.useEffect(()=> {
        api.getProducts()
    .then(data=>setProducts(data.products))
    },[])

    return (
    <Ctx.Provider value={{products, setProducts}}>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/catalog" element={<Catalog />} />         
            <Route path="/cart" element={<Cart />} />        
            <Route path="/product/:id" element={<Product />} />             
        </Routes>            
        <Footer />
    </Ctx.Provider>
    )
}
