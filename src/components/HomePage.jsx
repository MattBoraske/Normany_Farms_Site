import React from 'react';
import Navbar from './NavBar';
import Header from './Header';

import './HomePage.css'; 

import homePageImage1 from '../media/homepage/home_page_image_1.png';
import homePageImage2 from  '../media/homepage/home_page_image_2.png';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="mission-statement">
                <h2>Mission</h2>
                <p>To provide therapeutic opportunities to individuals with disabilities through a program of therapeutic horseback riding. We wish to provide this service in a safe and enjoyable atmosphere to as many members of the community as possible.</p>
            </div>
            <div className="trnf-info">
                <h2>Therapeutic Riding at Normandy Farm, Inc. (TRNF)</h2>
                <p>TRNF is a program where children and adults with a variety of challenges participate to enjoy a horseback riding experience. TRNF is volunteer staffed and provides riders with a safe, thrilling activity - a life long dream come true for many.</p>
            </div>
            <div className="images-container">
                <div className="image-slot">
                    <img src={homePageImage1} alt="Home Page Image #1" />
                </div>
                <div className="image-slot">
                    <img src={homePageImage2} alt="Home Page Image #2" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
