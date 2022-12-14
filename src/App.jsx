import React from "react";
import {Route, Routes} from 'react-router-dom';

import Header from './Components/Header';
import Footer from "./Components/Footer";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";

export default () => {
    return <>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/catalog" element={<Catalog />} />            
        </Routes>            
        <Footer />
    </>
}
