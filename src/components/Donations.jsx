import React from 'react';
import Navbar from './NavBar';
import Header from './Header';

import './Donations.css';

const Donations = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="donations">
                <h2>Donations</h2>
                <p>Whenever you shop on Amazon, log into <a href="https://smile.amazon.com" target="_blank" rel="noopener noreferrer">Amazon Smile</a> first, choose Therapeutic Riding at Normandy Farm to support, and they donate back to us. Thank you for helping!</p>
            </div>
        </div>
    );
};

export default Donations;
