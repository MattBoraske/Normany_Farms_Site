import React from 'react';

const Donations = () => {
  return (
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="donations">
      <section className="mb-4">
        <h2 className="my-2 text-center text-2xl text-blue-900 uppercase font-bold">Donations</h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900"></div>
        </div>
      </section>
      
      <div className="flex flex-col justify-between text-center" data-aos="fade-up">
        <div className="flex flex-col px-8" data-aos="zoom-in" data-aos-delay="500">
          {/* Main Heading */}
          <h3 className="text-xl md:text-3xl lg:text-4xl text-blue-900 font-bold text-center">
            Teddy Roosevelt once said, "Nothing does as much for the inside of a man as the outside of a horse." 
          </h3>

          {/* Paragraphs */}
          <div>
            <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold text-center">
              Therapeutic riding benefits people with special needs in countless ways—both inside and out!
              Horses provide a profound sense of independence and equine activities foster self-awareness, build self-confidence, and enhance concentration.
              They also improve posture, balance, coordination, strength, and flexibility!
            </p>
          </div>
          <div>
            <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold text-center">
              Donate today to help continue providing the benefits of therapeutic riding to residents of Harford County. 
            </p>
          </div>

          {/* Container for centering the button */}
          <div className="flex justify-center mt-4">
            {/* 'Donate To Our Cause' Button */}
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
                  d="M10.293 3.293a1 1 0 011.414 0l6 
                  6a1 1 0 010 1.414l-6 6a1 1 0 
                  01-1.414-1.414L14.586 11H3a1 1 0 
                  110-2h11.586l-4.293-4.293a1 1 0 
                  010-1.414z"
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