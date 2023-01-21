import React from 'react';
import './style.css';

const Banner = ({title, info, color, img}) => {
    const st = {background: color}
  return (
        <div className="banner__content" style={st}>
            <div className="banner__text">
                <h3>{title}</h3>
                <p className='bannerBody1__text'>{info}</p>
            </div>
            <div className="banner__img">
                <img src={img} alt={title} />
            </div>
        </div>

  )
}

export default Banner;
