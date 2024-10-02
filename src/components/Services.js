import React from 'react';
import img from '../images/warm_up_stretching.svg'; 
import img2 from '../images/horse_care.svg';
import img3 from '../images/horse_jumping.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Services</h2>
                    
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                </div>
\
                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col">
                            <div className="flex-grow flex flex-col">
                                <div className="mb-4 flex-shrink-0" style={{ height: '240px', overflow: 'hidden' }}>
                                    <img alt="Warm-up exercises" className="w-full h-full object-cover object-top rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                </div>
                                <h2 className="font-semibold mb-2 text-2xl text-center">Warm-up Exercises</h2>
                                <p className="text-md text-center font-medium mt-auto">
                                    To prepare riders for horseback, lessons typically begin with instructor-led basic stretching followed by light warm-up exercises.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col">
                            <div className="flex-grow flex flex-col">
                                <div className="mb-4 flex-shrink-0" style={{ height: '240px', overflow: 'hidden' }}>
                                    <img alt="Horsecare training" className="w-full h-full object-cover object-top rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                </div>
                                <h2 className="font-semibold mb-2 text-2xl text-center">Horsecare Training</h2>
                                <p className="text-md text-center font-medium mt-auto">
                                    Prior to riding instruction, riders learn about horsecare fundamentals including horse anatomy, how to groom and feed a horse, and how to saddle one.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group flex flex-col">
                            <div className="flex-grow flex flex-col">
                                <div className="mb-4 flex-shrink-0" style={{ height: '240px', overflow: 'hidden' }}>
                                    <img alt="Horseback riding" className="w-full h-full object-cover object-top rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                </div>
                                <h2 className="font-semibold mb-2 text-2xl text-center">Horseback Riding</h2>
                                <p className="text-md text-center font-medium mt-auto">
                                    As part of riding, we include fun activities like horseback games and, obstacle courses, and gymnastic movements on horseback!
                                </p>
                            </div>
                        </div>                
                    </div>
                </div>
            </section>

            {/* ... (rest of the component remains unchanged) ... */}
        </div>
    )
}

export default Services;