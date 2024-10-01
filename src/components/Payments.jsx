import React from 'react';

import './Payments.css';
import Navbar from './NavBar';
import Header from './Header';

const Payments = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="payments">
                <h2>Payment/Purchase</h2>
                <p>Donate, Purchase Tickets, or Pay for Riding Sessions</p>
                <a href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=004a08b6a87a9&mfid=1710460649368_004a08b6a87a9#/checkout/openButton" target="_blank" rel="noopener noreferrer">
                    <button className="pay-now-button">Pay Now</button>
                </a>
            </div>
        </div>
    );
};

export default Payments;