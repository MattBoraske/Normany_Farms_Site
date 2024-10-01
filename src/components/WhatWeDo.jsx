import React from 'react';
import Navbar from './NavBar';
import Header from './Header';

import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="what-we-do">
                <h2>What We Do</h2>
                <p>During a lesson, one, two, or three volunteers, and an instructor can work with a rider in an enclosed ring or stable area for any of several purposes.  Warm up exercises and basic stretching usually begins the class.  The rider may then learn special riding skills (trotting or dressage), care of the horse, parts of a horse, sharing skills, good sportsmanship, independence, or how to saddle a horse with activities incorporated into a lesson.  The lesson could consist of games by horseback, an obstacle course, gymnastic type movements on the back of a horse, or learning to properly guide a horse.  A well-integrated team helps achieve an atmosphere which makes it fun for everyone.  Most of our lessons are held in the indoor arena; however, occasionally we'll take a little break for a stroll across the countryside</p>
                
                {/* Include the full content as per your requirement */}

                <h3>Types of Disabilities That Could Benefit From Therapeutic Riding</h3>
                <ul>
                    {/* List of disabilities */}
                    <li>Cerebral Palsy</li>
                    <li>Learning Disability</li>
                    <li>ADD</li>
                    <li>Visual and Hearing Impairment</li>
                    <li>Autism</li>
                    <li>Downs Syndrome</li>
                    <li>Mental Retardation</li>
                    <li>Orthopedic Conditions</li>
                </ul>
                <h5><i>The primary physician will need to approve and complete a medical form available at the farm.</i></h5>



                <h3>Benefits of Therapeutic Riding</h3>

                <h3>Physical</h3>
                <ul>
                    <li>Coordination</li>
                    <li>Muscle tone</li>
                    <li>Posture, sitting, and standing balance</li>
                    <li>Gross and fine motor skills</li>
                    <li>Perceptual motor/sensory motor integration</li>
                    <li>Cardiovascular function and stamina</li>
                    <li>Relaxation of spastic muscles/facilitation of flaccid muscles</li>
                    <li>Increased functional range of motion and muscular strength</li>
                </ul>

                <h3>Cognitive</h3>
                <h4>Increased:</h4>
                <ul>
                    <li>Vocabulary - application and recall</li>
                    <li>Verbal integration and participation</li>
                    <li>Visual and auditory discrimination</li>
                </ul>
                <h4>Improved:</h4>
                <ul>
                    <li>Attention and concentation</li>
                    <li>Sequencing and planning skills</li>
                    <li>Judgement and critical thinking skills</li>
                    <li>Flexibility in thinking</li>
                </ul>

                <h3>Psycho-Social Benefits</h3>
                <h4>Increased:</h4>
                <ul>
                    <li>Self-confidence, self-esteem, and self-control</li>
                    <li>Understanding of consequences (cause and effect)</li>
                    <li>Desire of responsibility</li>
                    <li>Ability to appropriately solicit help and act independently</li>
                    <li>Desire to take risks</li>
                    <li>Empathy and sense of empowerment</li>
                </ul>
                <h4>Improved:</h4>
                <ul>
                    <li>Positive social interactions and teamwork</li>
                    <li>Completion of difficult tasks</li>
                    <li>Interaction with positive role models</li>
                    <li>Experience of success in a supportive environment</li>
                </ul>
            </div>
        </div>
    );
};

export default WhatWeDo;
