import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logo.png';

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition duration-300 ease-in-out ${
        !top && 'bg-white shadow-lg'
      }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        {/* Logo and Title */}
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
          <HashLink smooth to="/#hero" className="flex items-center">
            <img src={img} alt="Normandy Farm Logo" className="h-12 w-12 mr-4" />
            <h1 className="font-extrabold text-2xl text-blue-900">Normandy Farm</h1>
          </HashLink>
        </div>
        {/* Hamburger Menu */}
        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900 z-50"
            onClick={handleClick}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // Close Icon
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                // Hamburger Icon
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          {/* Desktop Navigation Links */}
          <div className="hidden lg:inline-block p-5">
            <NavLinks className="flex items-center space-x-6" />
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={handleClick}
        ></div>
      )}
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out transform lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col p-6 mt-16">
          <NavLinks className="flex flex-col space-y-6" onLinkClick={closeMenu} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;