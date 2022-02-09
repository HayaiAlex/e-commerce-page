import React from 'react';
import Minus from './../images/icon-minus.svg';
import Plus from './../images/icon-plus.svg';

const ItemCounter = ({ count, modifyCount }) => {
    return (
        <div id='item-counter' className='flex'>
            <img onClick={modifyCount(-1)} id="minus" role="button" src={Minus} alt="minus button" />
            <p id="counter">{count}</p>
            <img onClick={modifyCount(1)} id="plus" role="button" src={Plus} alt="plus button" />
        </div>
    );
};

export default ItemCounter;
