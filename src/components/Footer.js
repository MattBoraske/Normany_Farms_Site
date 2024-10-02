import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    
                    {/* Top area: Blocks */}
                    <div className="grid grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
                    
                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-3">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-bold text-2xl mb-4">Normandy Farms, Inc.</h3>
                                <div className='text-md font-medium text-gray-600'>
                                    <p>3153 Ady Road</p>
                                    <p>Street, MD 21154</p>
                                </div>
                            </div>
                        </div>
                    
                        {/* 2nd block */}
                        <div className="col-span-12 lg:col-span-3 lg:ml-8">
                            <div className="grid grid-cols-2 gap-4">
                                <HashLink to="#" className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-[#013289] text-center rounded-lg hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    About Us
                                </HashLink>
                                <HashLink to="#" className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-[#013289] text-center rounded-lg hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    Services
                                </HashLink>
                                <HashLink to="#" className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-[#013289] text-center rounded-lg hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    Events
                                </HashLink>
                                <HashLink to="#" className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-[#013289] text-center rounded-lg hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    Volunteer
                                </HashLink>
                                <HashLink to="#" className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-[#013289] text-center rounded-lg hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    Donations
                                </HashLink>
                                <HashLink to="#" className="box-border border-b-4 border-blue-900 p-4 bg-gray-200 text-[#013289] text-center rounded-lg hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                                    Contact Us
                                </HashLink>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-700 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{"  "}
                                <HashLink
                                    to="#"
                                    className="hover:text-gray-900"
                                >
                                    Normandy Farms
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;