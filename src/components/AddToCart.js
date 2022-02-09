import React from 'react';
import Cart from './../images/icon-cart.svg';

const AddToCart = ({ addItem }) => {
    return (
        <div onClick={addItem} id='add-container' className='flex'>
            <img id="add-button-cart" role="img" src={Cart} alt="cart image" />
            <p className='orange-button'>Add to cart</p>
        </div>
    );
};

export default AddToCart;
