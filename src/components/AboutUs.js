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
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
      <div
        className="flex flex-col lg:flex-row py-8 justify-between"
        data-aos="fade-up"
      >
        {/* Image Carousel */}
        <div
          className="w-full lg:w-1/2 flex flex-col lg:mx-4 justify-center my-4 lg:my-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative overflow-hidden w-full">
            <div className="aspect-w-16 aspect-h-9">
              {images.map((img, index) => (
                <img
                  key={index}
                  alt={`carousel img ${index + 1}`}
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

        {/* Text Content (Hidden on Mobile) */}
        <div
          className="hidden lg:flex flex-col lg:w-1/2 px-8"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {/* Main Title */}
          <h3 className="text-3xl lg:text-4xl text-blue-900 font-bold mb-4">
            Empowering lives through the healing power of horses.
          </h3>

          {/* Other Text Content */}
          <div>
            <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              We guide riders through a comprehensive program of warm-ups, riding skills, horse care, and
              fun activities in a safe, indoor arena setting.
            </p>
            <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold">
              Our team includes both seasoned individuals with years of experience and those with no prior
              experience, united by a willingness to contribute to their community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
