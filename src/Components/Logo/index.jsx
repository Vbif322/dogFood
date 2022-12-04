import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg';

export default () =>{
    return(
        <Link to="/" className="logo">
            <img src={logo} alt="logo_dogFood" />
        </Link>
    )
}