import React from 'react';
import Logo from '../Logo';
import './style.css';
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg";

const Header = () => {

    return (
        <header>
            <Logo />
            <input type="search" />
            <nav>
                <a href="#"><FavIcon/></a>
                <a href="#"><CartIcon/></a>
                <a href="#"><ProfileIcon/></a>
            </nav>
        </header>
    )
}

export default Header;