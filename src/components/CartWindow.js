import React from 'react';
import CartItems from './CartItems.js';

const CartWindow = ({ openState, cartData, removeItem }) => {
    let content = ''
    if (cartData.length > 0) {
        content =
            <div id='cart-content-container'>
                <CartItems cartData={cartData} removeItem={removeItem} />
                <p id='checkout' className='orange-button'>Checkout</p>
            </div>
    } else {
        content = <p id="cart-empty">Your cart is empty.</p>
    }

    return (
        <div id="cart-window" className={openState ? "cart-open" : "cart-closed"}>
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
