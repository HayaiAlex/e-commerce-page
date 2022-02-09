import React from 'react';
import Bin from './../images/icon-delete.svg';

const CartItems = ({ cartData }) => {
    const formatPrice = (price) => {
        const num = Number(price);
        return num.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    }


    return (
        <div id='cart-items-container' className='flex-col'>
            {cartData.map(item => (
                <div className='cart-item flex'>
                    <img className='item-img' role="img" src={item.img} alt="Image of shoes" />
                    <div className="item-info flex-col">
                        <p className='item-name'>{item.name}</p>
                        <div className='item-cost flex'>
                            <p className='item-cost-single'>{`${formatPrice(item.price)} x ${item.quantity}`}</p>
                            <p className='item-cost-total'>{formatPrice(item.price * item.quantity)}</p>
                        </div>
                    </div>
                    <img role="button" className='item-bin' src={Bin} alt="Click to delete item" />
                </div>
            ))}
        </div>
    );
};

export default CartItems;
