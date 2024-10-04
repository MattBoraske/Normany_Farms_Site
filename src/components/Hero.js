import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import YoutubePlayer from './YoutubePlayer';

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between"
          >
            {/* Left Side */}
            <div
              className="lg:w-2/5 flex flex-col justify-center order-2 lg:order-1"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {/* Main Heading */}
              <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 text-center lg:text-left">
                Empowering lives through the healing power of horses.
              </h1>

              {/* Secondary Text */}
              <div className="text-base md:text-lg lg:text-xl font-semibold tracking-tight mb-5 text-gray-500 text-center lg:text-left">
                Therapeutic Riding at Normandy Farm (TRNF) has been committed to transforming lives through
                therapeutic horseback riding since 1992.
              </div>

              {/* Mobile Video */}
              <div
                className="block lg:hidden mb-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {/* Responsive Video Container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <YoutubePlayer
                      videoId="khUXU21eypI"
                      className="rounded-t w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Text from AboutUs.js (Visible on Mobile Only) */}
              <div className="block lg:hidden">
                {/* First Paragraph */}
                <p className="my-3 text-sm md:text-base text-gray-600 font-semibold text-center">
                  We guide riders through a comprehensive program of warm-ups, riding skills, horse care, and
                  fun activities in a safe, indoor arena setting.
                </p>
                {/* Second Paragraph */}
                <p className="my-3 text-sm md:text-base text-gray-600 font-semibold text-center">
                  Our team includes both seasoned individuals with years of experience and those with no prior
                  experience, united by a willingness to contribute to their community.
                </p>
              </div>

              {/* 'Learn more' Button */}
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  onClick={handleLearnMore}
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-base md:text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 
                      6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                      11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                      1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side (Video for Desktop) */}
            <div
              className="hidden lg:flex lg:justify-end w-full lg:w-1/2 order-1 lg:order-2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {/* Responsive Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute top-0 left-0 w-full h-full">
                  <YoutubePlayer
                    videoId="khUXU21eypI"
                    className="rounded-t w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
