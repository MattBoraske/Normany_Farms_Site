import React from 'react';

const Volunteer = () => {
  const handleVolunteerWithUs = (e) => {
    e.preventDefault();
    // Replace this URL with your actual Google Form URL
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSe3BL9MTLQQS_E3DfLJNs1LGPKcE2KCLaE4ak33muMShRX-5A/viewform?usp=sf_link',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="volunteer">
        <div className="flex flex-col py-8 justify-between text-center lg:text-left" data-aos="fade-up">
          <div className="flex flex-col my-4 px-8" data-aos="zoom-in" data-aos-delay="500">
            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-900 font-bold text-center lg:text-left">
              The success of TRNF relies on enthusiastic volunteers!
            </h3>

            {/* Paragraphs */}
            <div>
              <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold text-center lg:text-left">
                Ways you can help include serving as a horse leader, a side walker who assists riders with balance
                and riding instructions, or lending a hand with grooming and caring of the horses.
              </p>
            </div>
            <div>
              <p className="my-3 text-base md:text-lg lg:text-xl text-gray-600 font-semibold text-center lg:text-left">
                All volunteers receive in-service training to better support the special needs of our riders.
              </p>
            </div>

            {/* 'Volunteer with us' Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe3BL9MTLQQS_E3DfLJNs1LGPKcE2KCLaE4ak33muMShRX-5A/viewform?usp=sf_link"
              onClick={handleVolunteerWithUs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-base md:text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
            >
              Volunteer with us
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
    </>
  );
};

export default Volunteer;