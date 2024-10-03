import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center"> {/* Full-height green background */}
      <div className="w-full sm:w-5/6 bg-white text-white p-6 rounded-xl shadow-lg mt-14 mb-14"> {/* Inner container with responsive width */}
        <Header />
        <HeroSection />
        <ProductSection />
      </div>
    </div>
  );
}

export default App;
