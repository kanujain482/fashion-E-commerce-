import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons'; 
import profileImage from '../profile.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      {/* Left Section: Title, Buttons, and Paragraph */}
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <h1 className="text-7xl font-extrabold text-black">
            The world’s <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
            <br/><span className="text-green-500">finest</span> knitwear
          </h1>
          <div className="flex space-x-4 mt-4">
            <button className="bg-black text-white py-2 px-10 rounded-full hover:bg-white hover:text-black transition duration-200">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="border bg-white text-black py-2 px-10 rounded-full hover:bg-black hover:text-white transition duration-200">
              Catalogue
            </button>
          </div>
        </div>

        <div className="flex-1 md:pl-4">
          <p className="text-gray-700 text-xl">
            Our collection of women’s sweaters, cardigans, jumpers and knitted accessories range from comfy to fashionable.
          </p>

          {/* Profile images and social media links */}
          <div className="flex mt-4 items-center justify-between">
            <img src={profileImage} alt="Profile" className="w-7 h-7 rounded-full ml-0" />
            <img src={profileImage} alt="Profile" className="w-7 h-7 rounded-full ml-0" />
            <img src={profileImage} alt="Profile" className="w-7 h-7 rounded-full ml-0" />
            
            <p className="text-sm ml-4 text-black">join our community</p>

            {/* Social media icons, adjusted for responsiveness */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 ml-auto"> 
              <div className="flex items-center space-x-2">
                <a href="#" className="text-green-500">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <p className="text-black">Instagram</p>
              </div>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-green-500">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <p className="text-black">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
