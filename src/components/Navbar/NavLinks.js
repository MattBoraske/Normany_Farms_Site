import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ className, onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className={className}>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
        onClick={handleClick}
      >
        About Us
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#services"
        onClick={handleClick}
      >
        Our Services
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#volunteer-and-events"
        onClick={handleClick}
      >
        Volunteer
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#volunteer-and-events"
        onClick={handleClick}
      >
        Upcoming Events
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#donations"
        onClick={handleClick}
      >
        Donations
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/contact#contact"
        onClick={handleClick}
      >
        Contact Us
      </HashLink>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        aria-label="Facebook"
        onClick={handleClick}
      >
        <svg
          className="w-5 h-5 inline-block"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default NavLinks;