import React from 'react';
import Banner from '../Banner';
import "./style.css";

const BannerBlock = ({ad}) => {
  return (
    <div className='bannerBlock-wrapper'>
        {ad.map(el=>(
            <Banner key={el.id} {...el}/>
        ))}
    </div>
    
  )
}

export default BannerBlock;