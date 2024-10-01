import React from 'react';

import './Calendar.css';
import Header from './Header';
import Navbar from './NavBar';

const Calendar = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="calendar-page">
                <h2>Spring and Fall Schedule</h2>
                <p><strong>Wednesday:</strong> 6:00—7:00 (reserved for our more advanced riders)</p>
                <p><strong>Saturday:</strong> 9:00—12:00</p>

                <h3>Volunteer Orientation</h3>
                <p>TBD</p>

                <p>Please contact the volunteer coordinator (<a href="mailto:trnfinc@gmail.com">trnfinc@gmail.com</a>) if you would like more information on volunteering.</p>

                <h3>SPRING 2023:</h3>
                <p>TBD</p>

                <h3>FALL 2022:</h3>
                <p>Sept 14, 2022, and Sept 17, 2022, for 9 weeks.</p>
            </div>
        </div>
    );
};

export default Calendar;
