import React from 'react';

import logo from '../media/normany_farms_logo.jpg';

import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Therapeutic Riding at Normandy Farm, Inc.</h1>
            <h2>normandyfarm.org</h2>
            <img src={logo} alt="Normandy Farms Logo" />
        </header>
    );
};

export default Header;
