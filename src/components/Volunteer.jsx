import React from 'react';
import Navbar from './NavBar';
import Header from './Header';

import './Volunteer.css';

const Volunteer = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="volunteers">
                <h2>Volunteers</h2>
                <p>TRNF is run solely by volunteers and their dedication to the program. Various jobs are available for all volunteers and we welcome everyone. Volunteer hours for High School students can be fulfilled at this program. <a href="/contact-us">Contact us</a> if you are interested in joining TRNF as a volunteer!</p>
                <p>Volunteering has a meaningful, positive impact on both you and your community. For students, look into earning the President's Volunteer Service Award!! It would look great on your resume!!</p>

                <h3>What we need volunteers for:</h3>
                <ul>
                    <li><strong>SIDEWALKER:</strong> As a sidewalker you are responsible for the rider you are working with and reinforcing direction given by the instructor. You are not to do the task for them, only assist verbally or by tapping their hand or leg to reinforce right and left. You will need to be aware of the rider at all times and be able to jog alongside when trotting.</li>
                    <li><strong>LEADER OF HORSE:</strong> As a leader, you are responsible for the horse you are leading. Proper techniques will be demonstrated for those new to leading at a therapeutic riding program. This position will only be filled with those that have horse experience and only after they are familiar with the program horses.</li>
                    <li><strong>INSTRUCTOR:</strong> The instructor will be the person asking the rider to complete tasks or exercises. The instructor should be the only one verbally communicating with the rider during a lesson. The sidewalker may need to speak to the rider in order to reinforce the instructions but it should only be one sidewalker speaking at a time.</li>
                    <li><strong>FUNDRAISING:</strong> The Board of Directors are always looking for ideas and assistance with fundraising. Please contact us if you have any ideas on fundraising or would like to assist in any fundraisers that are currently in place.</li>
                </ul>
            </div>
        </div>
    );
};

export default Volunteer;
