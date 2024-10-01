import React from 'react';
import Navbar from './NavBar';
import Header from './Header';

import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="mission-statement-about-us">
                <h2>Mission</h2>
                <p>morgan was here! To provide therapeutic opportunities to individuals with disabilities through a program of therapeutic horseback riding. We wish to provide this service in a safe and enjoyable atmosphere to as many members of the community as possible.</p>
            </div>
            <div className="history-section">
                <h3>Our History</h3>
                <p>1989: Therapeutic Riding at Normandy Farm, Inc., a non-profit organization, originally was developed in Baltimore County, MD.</p>
                <p>1992: Moved to Normandy Farm. A 160 acre beautiful farm located in Street, MD (northern Harford County approximately ten minutes north of Bel Air). Normandy Farm, originally established as a beef farm, is still our home today.</p>
                <p>2004: The farm built an indoor arena. TRNF rents space for the program.</p>
                <p>TRNF started off with a small outdoor ring and 5 school horses, giving lessons to about 8 students. Today, along with the ability to offer lessons in an indoor arena, we have 11 horses and give lessons to approximately 35 students. Several of our horses have been donations (the best kind) and have proven to be worth their weight in gold.</p>
                <p>TRNF runs a 10-12 week session in both the spring and fall. We try to keep our group lessons to a minimum of 4 riders, incorporating a wide range of techniques.</p>
                <p>Although a physical or occupational therapist is not on staff, we have been lucky enough to have these services on an occasional consultation basis.</p>
                <p>We participate in Special Olympics of Maryland every year and we have taken students and horses to the shows offered by other programs.</p>
            </div>
        </div>
    );
};

export default AboutUs;
