import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Volunteer = () => {
    const navigate = useNavigate();

    const handleVolunteerWithUs = (e) => {
        e.preventDefault();
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='volunteer'>
                <div className="flex flex-col py-8 justify-between text-center" data-aos="fade-up">
                    <div className="flex-col my-4 px-8" data-aos="zoom-in" data-aos-delay="500">
                        <h3 className="text-3xl text-blue-900 font-bold">The success of TRNF relies on enthusiastic volunteers!</h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-semibold'>Ways you can help include servings as a horse leader, a side walker who assists riders with balance and riding instructions, or lending a hand with grooming and caring of the horses.</p>
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

export default Volunteer;