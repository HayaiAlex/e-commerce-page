import React, { useState } from 'react';
import Cart from './Cart';
import Hamburger from './Hamburger';
import SideNav from './SideNav';
import CartWindow from './CartWindow';
import logo from './../images/logo.svg';
import avatar from './../images/image-avatar.png';

const Header = ({ cartData, removeItem }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <div id="header">
            <Hamburger hamburgerMenu={<SideNav openState={navOpen} closeNav={toggleNav} />} toggleNav={toggleNav} />
            <img id="logo" role="img" src={logo} alt="Sneakers Logo" />
            <div id="desktop-nav">
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <Cart cartWindow={<CartWindow openState={cartOpen} cartData={cartData} removeItem={removeItem} />} toggleCart={toggleCart} />
            <img id="avatar" role="img" src={avatar} alt="Avatar" />
        </div>
    );
};

export default Header;
