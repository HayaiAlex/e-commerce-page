import React from 'react';
import cartIcon from './../images/icon-cart.svg';

const Cart = ({ cartWindow, toggleCart }) => {
    return (
        <>
            <img onClick={toggleCart} id="cart" src={cartIcon} alt="Shopping Cart Icon" />
            {cartWindow}
        </>
    );
};

export default Cart;
