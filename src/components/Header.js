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
        <header id="header">
            <Hamburger hamburgerMenu={<SideNav openState={navOpen} closeNav={toggleNav} />} toggleNav={toggleNav} />
            <img id="logo" src={logo} alt="Sneakers Logo" />
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
            <img id="avatar" src={avatar} alt="Avatar" />
        </header>
    );
};

export default Header;
