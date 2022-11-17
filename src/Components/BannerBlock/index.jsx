import React from 'react';
import Banner from '../Banner';
import "./style.css";

const BannerBlock = ({ad, num1, num2}) => {
  return (
    <div className='bannerBlock-wrapper'>
        <Banner key={ad[num1].id} {...ad[num1]}/>
        <Banner key={ad[num2].id} {...ad[num2]}/>
    </div>
    
  )
}

export default BannerBlock;