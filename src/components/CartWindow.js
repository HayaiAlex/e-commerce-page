import React from 'react';
import CartItems from './CartItems.js';

const CartWindow = ({ items }) => {
    let content = ''
    if (items) {
        content = <CartItems items={items} />
    } else {
        content = <p id="cart-empty">Your cart is empty.</p>

    }

    return (
        <div id="cart-window">
            <div className="top">
                <h3 id="cart-title">Cart</h3>
            </div>
            <div className="bottom">
                {content}
            </div >
        </div>
    );
};

export default CartWindow;
