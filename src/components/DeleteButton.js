import React from 'react';
import BinIcon from './../images/icon-delete.svg';

const DeleteButton = ({ removeItem }) => {
    return (
        <img onClick={removeItem} role="button" className='item-bin' src={BinIcon} alt="Click to delete item" />
    );
};

export default DeleteButton;
