import React from "react";
import {Link} from 'react-router-dom';

import data from '../JSON/Products.json';
import ad from '../JSON/BannerInfo.json';
import ProductsList from "../Components/ProductsList";
import BigBanner from "../Components/BigBanner";
import BannerBlock from "../Components/BannerBlock";
import {Typography, Box, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default () => {
    return <>
            <Box sx={{paddingLeft:20 , bgcolor:"#ffe44d", mb:20}}>
                    <Typography variant="h3" component="h2" color={'#000'} sx={{fontWeight:500, mb:2}}>
                            Крафтовые лакомства для собак
                    </Typography>
                    <Typography variant="h6" component="h3"  color={'#000'} sx={{fontWeight:300}}>
                            Всегда свежие лакомства ручной работы с доставкой по России и Миру
                    </Typography>
                    <Link to="/catalog">
                        <Button variant="contained" endIcon={<SendIcon /> } sx={{bgcolor:'#fff', color:'#000', borderRadius:4, mt:5, mb:8, textDecoration: 'none'}}>
                            Каталог
                        </Button>
                    </Link> 
            </Box>
        <BigBanner />
        <ProductsList data={data} />
        <BannerBlock ad = {ad} num1 = {0} num2={1}/>
        <ProductsList data={data} />
        <BannerBlock ad = {ad} num1 = {2} num2={3}/>
    </>
}
        
        