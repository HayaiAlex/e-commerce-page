import React from 'react';

const Product = ({ name, description, price, discount }) => {
    const formatPrice = (price) => {
        const num = Number(price);
        return num.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    }

    return (
        <div id='product-container'>
            <h2 id='product-name'>{name}</h2>
            <p id='product-description'>{description}</p>
            <div id="price" className='flex'>
                <p className="price" id="discounted-price">{formatPrice(price * discount)}</p>
                <p id="discount">{discount * 100 + '%'}</p>
                <p className="price" id="original-price">{formatPrice(price)}</p>
            </div>
        </div>
    );
};

export default Product;
