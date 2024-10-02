import React, { useState, useEffect, useCallback } from 'react';
import img1 from '../images/Normandy_1.png';
import img2 from '../images/Normandy_2.png';
import img3 from '../images/Normandy_3.png';
import { Link, useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const images = [img1, img2, img3];

    const navigate = useNavigate();

    const handleVolunteerWithUs = (e) => {
        e.preventDefault();
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    const nextImage = useCallback(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        let intervalId;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                nextImage();
            }, 5000); // Change image every 5 seconds
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlaying, nextImage]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
                <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <div 
                            className="relative overflow-hidden" 
                            style={{height: '400px'}}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {images.map((img, index) => (
                                <img 
                                    key={index}
                                    alt={`card img ${index + 1}`} 
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out" 
                                    src={img}
                                    style={{
                                        opacity: index === currentImage ? 1 : 0,
                                        zIndex: index === currentImage ? 1 : 0
                                    }}
                                />
                            ))}
                            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
                                <button onClick={prevImage} className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300">
                                    &#10094;
                                </button>
                                <button onClick={nextImage} className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300">
                                    &#10095;
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                        <h3 className="text-3xl text-blue-900 font-bold">At TRNF, we provide therapeutic opportunities for individuals with disabilities through therapeutic horseback riding.</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Our instructors and volunteers guide riders through a comprehensive program of warm-ups, riding skills, horse care, and fun activities in a safe, indoor arena setting.</p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>The success of our program relies on enthusiastic volunteers who serve as horse leaders, side walkers who assist riders with balance and riding instructions, or help with grooming and caring of horses. Our team includes both seasoned individuals with years of experience and those with no prior experience, united by a willingness to contribute to their community.</p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>All volunteers receive in-service training to better support the special needs of our riders.</p>
                        </div>
                        <Link 
                            to="/contact" 
                            onClick={handleVolunteerWithUs}
                            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                        >
                            Volunteer with us
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;