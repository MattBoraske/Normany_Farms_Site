import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import GoogleCalendar from '../components/GCalendar';

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
            <section id="events" className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <GoogleCalendar />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;
