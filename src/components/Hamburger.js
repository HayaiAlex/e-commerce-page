import React, { useState } from 'react';
import menuIcon from './../images/icon-menu.svg';

const Hamburger = ({ hamburgerMenu, toggleNav }) => {
    return (
        <>
            <img onClick={toggleNav} id="hamburger" role="button" aria-label='Menu Button' src={menuIcon} alt="Menu Button" />
            {hamburgerMenu}
        </>
    );
};

export default Hamburger;
