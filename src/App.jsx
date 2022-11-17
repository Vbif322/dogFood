import React from "react";
import Header from './Components/Header';
import data from './JSON/Products.json';
import ad from './JSON/BannerInfo.json';
import Footer from "./Components/Footer";
import ProductsList from "./Components/ProductsList";
import BigBanner from "./Components/BigBanner";
import BannerBlock from "./Components/BannerBlock";

export default () => {
    return <>
        <Header />
        <BigBanner />
        <ProductsList data={data} />
        <BannerBlock ad = {ad} num1 = {0} num2={1}/>
        <ProductsList data={data} />
        <BannerBlock ad = {ad} num1 = {2} num2={3}/>
        <Footer />
    </>
}
