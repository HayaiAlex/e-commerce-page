import React from 'react';
import Thumbnail from './../images/image-product-1-thumbnail.jpg';
import DeleteButton from './DeleteButton.js'

const CartItems = ({ cartData, removeItem }) => {
    const formatPrice = (price) => {
        const num = Number(price);
        return num.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    }

    return (
        <div id='cart-items-container' className='flex-col'>
            {cartData.map(item => (
                <div className='cart-item flex' data-id={item.id}>
                    <img className='item-img' src={Thumbnail} alt="Image of shoes" />
                    <div className="item-info flex-col">
                        <p className='item-name'>{item.name}</p>
                        <div className='item-cost flex'>
                            <p className='item-cost-single'>{`${formatPrice(item.price)} x ${item.quantity}`}</p>
                            <p className='item-cost-total'>{formatPrice(item.price * item.quantity)}</p>
                        </div>
                    </div>
                    <DeleteButton removeItem={removeItem} />
                </div>
            ))}
        </div>
    );
};

export default CartItems;
