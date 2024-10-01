import React from 'react';
import Navbar from './NavBar';
import Header from './Header';

import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="contact-us">
                <h2>Contact Us</h2>
                
                <h3>Directions</h3>
                <p><strong>From Bel Air, Maryland:</strong> Go north on Route 1 about 3 miles. On MD Rt. 543, turn left. Travel 3.6 miles, cross bridge at Deer Creek, and travel up hill to entrance of farm on the right on the top of the hill. Entrance is marked by an old tree, with gray stone pillars at the entrance to the farm.</p>

                <p><strong>From York County, Pennsylvania:</strong> Go south on PA Rt. 74 which becomes MD Rt. 165. Turn left on Md. Rt. 543. Farm is located on left, 4.8 miles from intersection. Entrance is marked by an old tree, with gray stone pillars at the entrance to the farm.</p>

                <p>Please contact us about visiting for a lesson!</p>

                <h3>Address</h3>
                <p>3153 Ady Road<br />
                Street, MD 21154</p>

                <h3>E-mail</h3>
                <p><a href="mailto:trnfinc@gmail.com">trnfinc@gmail.com</a></p>
            </div>
        </div>
    );
};

export default ContactUs;
