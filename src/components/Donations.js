import React, { useState, useEffect, useCallback } from 'react';

// You'll need to import your donation-related images here
import img1 from '../images/horses/Buckwheat.jpg';
import img2 from '../images/horses/Dixie.jpg';
import img3 from '../images/horses/Doc.jpg';
import img4 from '../images/horses/Nathan.jpg';
import img5 from '../images/horses/Norton.jpg';

const Donations = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const images = [img1, img2, img3, img4, img5];

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
      }, 5000);
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
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="donations">
      <section className="mb-4">
        <h2 className="my-2 text-center text-2xl text-blue-900 uppercase font-bold">Donations</h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900"></div>
        </div>
      </section>
      
      <div className="flex flex-col lg:flex-row justify-between" data-aos="fade-up">
        {/* Image Carousel - Modified for vertical images */}
        <div
          className="w-full lg:w-1/3 flex flex-col lg:mx-4 justify-center my-4 lg:my-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative overflow-hidden w-full">
            {/* Modified aspect ratio container for vertical images */}
            <div className="relative w-full pt-[149.47%]"> {/* 0.669:1 ratio (1/0.669 ≈ 149.47%) */}
              {images.map((img, index) => (
                <img
                  key={index}
                  alt={`horse ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  src={img}
                />
              ))}
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-20">
                <button
                  onClick={prevImage}
                  className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
                >
                  &#10094;
                </button>
                <button
                  onClick={nextImage}
                  className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Adjusted width to compensate for narrower carousel */}
        <div className="flex flex-col lg:w-3/5 px-8" data-aos="zoom-in" data-aos-delay="500">
          {/* Main Heading */}
          <h3 className="text-xl md:text-3xl lg:text-4xl text-blue-900 font-bold">
            Teddy Roosevelt once said, "Nothing does as much for the inside of a man as the outside of a horse." 
          </h3>

          {/* Paragraphs */}
          <div>
            <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              Therapeutic riding benefits people with special needs in countless ways—both inside and out!
              Horses provide a profound sense of independence and equine activities foster self-awareness, build self-confidence, and enhance concentration.
              They also improve posture, balance, coordination, strength, and flexibility!
            </p>
          </div>
          <div>
            <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              Donate today to help continue providing the benefits of therapeutic riding to residents of Harford County. 
            </p>
          </div>

          {/* Donate Button */}
          <div className="flex justify-center mt-4">
            <a
              href="https://venmo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-1/3 px-6 py-3 my-4 text-base md:text-lg shadow-xl rounded-2xl"
            >
              Donate To Our Cause
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;