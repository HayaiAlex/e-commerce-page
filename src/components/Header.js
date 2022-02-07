import React from 'react';
import Cart from './Cart';
import Hamburger from './Hamburger';
import logo from './../images/logo.svg';
import avatar from './../images/image-avatar.png';

const Header = () => {
    return (
        <div id="header">
            <Hamburger />
            <img id="logo" role="img" src={logo} alt="Sneakers Logo" />
            <Cart />
            <img id="avatar" role="img" src={avatar} alt="Avatar" />
        </div>
    );
};

export default Header;
