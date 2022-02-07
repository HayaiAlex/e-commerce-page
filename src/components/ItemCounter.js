import React from 'react';
import Minus from './../images/icon-minus.svg';
import Plus from './../images/icon-plus.svg';

const ItemCounter = () => {
    return (
        <div id='item-counter' className='flex'>
            <img id="minus" role="button" src={Minus} alt="minus button" />
            <p id="counter">0</p>
            <img id="plus" role="button" src={Plus} alt="plus button" />
        </div>
    );
};

export default ItemCounter;
