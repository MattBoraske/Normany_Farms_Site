import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import VolunteerAndCalendar from '../components/VolunteerAndCalendar';
import Donations from '../components/Donations';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <Hero />
            <section id="about">
                <AboutUs />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id='volunteer-and-events'>
                <VolunteerAndCalendar />
            </section>        
            <section id="donations">
                <Donations />
            </section>
            <Footer />
        </>
    )
}

export default Home;
