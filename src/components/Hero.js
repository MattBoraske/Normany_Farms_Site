import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import YoutubePlayer from './YoutubePlayer'; // Import the YouTube player component

const Hero = () => {
    const navigate = useNavigate();

    const handleLearnMore = (e) => {
        e.preventDefault();
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-2/5 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-4xl text-3xl font-bold text-blue-900">
                                Empowering lives through the healing power of horses
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">Therapeutic Riding at Normandy Farm (TRNF) has been committed to transforming lives through therapeutic horseback riding since 1992.</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            <Link 
                                to="/contact" 
                                onClick={handleLearnMore}
                                className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                            >
                                Learn more
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <YoutubePlayer
                                videoId="khUXU21eypI"
                                className="rounded-t float-right duration-1000 w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;