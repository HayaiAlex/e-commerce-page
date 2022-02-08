import React, { useState } from 'react';
import Cart from './Cart';
import Hamburger from './Hamburger';
import SideNav from './SideNav';
import logo from './../images/logo.svg';
import avatar from './../images/image-avatar.png';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleNav = () => {
        console.log("toggle nav")
        setOpen(!open)
    }

    return (
        <div id="header">
            <Hamburger hamburgerMenu={<SideNav openState={open} closeNav={toggleNav} />} toggleNav={toggleNav} />
            <img id="logo" role="img" src={logo} alt="Sneakers Logo" />
            <Cart />
            <img id="avatar" role="img" src={avatar} alt="Avatar" />
        </div>
    );
};

export default Header;
