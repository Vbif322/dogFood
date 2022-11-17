import React from 'react';
import './style.css';

const Banner = ({title, info, color, img}) => {
  return (
        <div className="banner__content" style={{background: color}}>
            <div className="banner__text">
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
            <div className="banner__img">
                <img src={img} alt={title} />
            </div>
        </div>

  )
}

export default Banner;
