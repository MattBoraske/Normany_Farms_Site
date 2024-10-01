import React from 'react';
import img1 from '../images/Normandy_2.png';
import img2 from '../images/Normandy_3.png'; // Assuming you have a second image
import { Link, useNavigate } from 'react-router-dom';

const Intro = () => {

    const navigate = useNavigate();

    const handleVolunteerWithUs = (e) => {
        e.preventDefault();
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
                <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center space-y-4">
                        <img alt="card img 1" className="rounded-t" src={img1} />
                        <img alt="card img 2" className="rounded-t" src={img2} />
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

export default Intro;