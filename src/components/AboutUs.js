import React, { useState, useEffect, useCallback } from 'react';
import img1 from '../images/Normandy_1.png';
import img2 from '../images/Normandy_2.png';
import img3 from '../images/Normandy_3.png';

const AboutUs = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const images = [img1, img2, img3];

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
                            <p className='my-3 text-xl text-gray-600 font-semibold'>We guide riders through a comprehensive program of warm-ups, riding skills, horse care, and fun activities in a safe, indoor arena setting.</p>
                        </div>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Our team includes both seasoned individuals with years of experience and those with no prior experience, united by a willingness to contribute to their community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;