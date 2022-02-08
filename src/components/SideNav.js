import React from 'react';
import CloseIcon from './../images/icon-close.svg';

const SideNav = ({ openState, closeNav }) => {
    return (
        <div id='side-nav' className={openState ? 'side-nav-open' : 'side-nav-closed'}>
            <img onClick={closeNav} id="side-nav-close-button" role="button" src={CloseIcon} alt="navigation close button" />
            <nav>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
