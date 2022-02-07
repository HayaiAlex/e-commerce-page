import React from 'react';
import menuIcon from './../images/icon-menu.svg';

const Hamburger = () => {
    return (
        <>
            <img id="hamburger" role="button" aria-label='Menu Button' src={menuIcon} alt="Menu Button" />
        </>
    );
};

export default Hamburger;
