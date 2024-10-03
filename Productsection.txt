import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPlay } from '@fortawesome/free-solid-svg-icons';

// ProductCard Component for Product 1
const Product1Card = () => (
  <div className="relative bg-gray-100 rounded-lg overflow-hidden flex-1 mt-16">
    <img src="pexels-photo-2705753.jpeg" alt="Heritage Collection" className="w-full h-full object-cover" />
    
    {/* Link icon at the top right */}
    <a
      href="#heritage-collection"
      className="absolute top-2 right-2 text-black bg-white p-2 rounded-full hover:bg-gray-800"
    >
      View all <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </a>

    {/* Adjusted Title, Description, and Price to be below the Link Icon */}
    <div className="absolute inset-0 flex flex-col justify-end p-4 ">
      <div className="absolute top-28 right-4 text-right"> {/* Positioned title and text below the icon */}
        
        <p className="text-gray-300">Soft, knit sweater</p>
        <p className="font-bold text-white text-3xl mr-8">$15.45</p>
      </div>
    </div>
  </div>
);

// ProductCard Component for Product 2
const Product2Card = () => (
  <div className="relative bg-gray-100 rounded-lg flex-1 p-3">
    <h3 className="text-lg font-semibold text-black space-x-9">
      <span>#Hand made</span> <span>#New collection</span>
    </h3>
    <p className="text-black text-5xl p-1">Heritage</p>
    <p className="text-sm p-2 text-black">
      We are crafting beautiful high-quality garments that are designed to last. Each piece combines elegance and durability.
    </p>
    <div className="relative bg-gray-100 rounded-lg overflow-hidden flex-1 p-4">
      <img
        src="photo-beautiful-woman-knitted-sweater-holding-her-hair-white-background_114579-41236.jpg"
        alt="Soft, knit sweater"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white rounded-3xl p-2 shadow-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faPlay} className="text-black" size="1.5x" />
        </button>
      </div>
    </div>
  </div>
);

// ProductCard Component for Product 3
const Product3Card = () => (
  <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '250px' }}>
    <img
      src="close-up-neatly-folded-knitted-items-pastel-color-light-background_169016-18269.jpg"
      alt="Pointelle knit sweater"
      className="w-full h-full object-cover"
    />
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 flex flex-col items-end">
      <h3 className="text-lg font-semibold text-white">New Arrivals</h3>
      {/* Changed View All with Icon */}
      <a
        href="#pointelle-knit-sweater"
        className="text-black hover:underline flex items-center mt-2 bg-white p-2 rounded-full"
      >
       
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" />
      </a>
    </div>
  </div>
);

// ProductCard Component for Product 4
const Product4Card = () => (
  <div className="flex-none w-1/3 flex flex-col">
    <div className="flex flex-col flex-1 justify-between" style={{ height: '100%' }}>
      <div className="relative bg-gray-100 rounded-lg overflow-hidden flex-1">
        <img
          src="free-photo-of-wool-sweater-and-jeans.jpeg"
          alt="Pointelle knit sweater"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
          <h3 className="text-2xl font-semibold text-white">Pointelle knit sweater</h3>
          <p className="text-gray-300">Round neck sweater with long sleeves.</p>
          {/* Play Button in Front of Gradient Effect */}
          <div className="absolute bottom-8 right-4 z-10"> {/* Adjusted z-index */}
            <a
              href="#casual-wool-sweater"
              className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-black text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Product Section Component
const ProductSection = () => {
   return (
    <section className="flex flex-col md:flex-row h-screen bg-white p-4 space-y-4 md:space-y-0 md:space-x-4 rounded-lg"> {/* Added rounded-lg */}
      {/* Left Column */}
      <div className="flex flex-col md:flex-row flex-1 space-y-4 md:space-y-0 md:space-x-4">
        <Product1Card />
        <div className="flex flex-col flex-1 space-y-4">
          <Product2Card />
          <Product3Card />
        </div>
      </div>

      {/* Right Column */}
      <Product4Card />
    </section>
  );
};

export default ProductSection;
