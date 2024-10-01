import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/what-we-do">What We Do</Link>
            <Link to="/volunteer">Volunteer</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/donations">Donations</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/calendar">Calendar</Link>
        </nav>
    );
};

export default Navbar;