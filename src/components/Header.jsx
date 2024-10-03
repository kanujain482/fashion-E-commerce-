import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSearch, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // State for sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white ">
        {/* Title */}
        <h1 className="text-2xl font-bold text-green-600 flex items-center space-x-2">
          <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
          <span>THE RUNWAY</span>
        </h1>

        {/* Search Bar */}
        <div className="relative mx-4 flex-1">
          <input
            type="text"
            placeholder=""
            className=" rounded-lg py-2 px-4 pl-10 text-gray-700 w-full"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Cart Section visible only on larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart/Balance with Cart Icon */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500 " />
            <span className="text-gray-500 " >$35,435</span>
          </div>

          {/* Sidebar Toggle Button for Mobile */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="text-gray-700" size="lg" />
          </button>
        </div>

        {/* Sidebar Toggle Button for Larger Screens */}
        <button className onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="text-gray-700 ml-3" size="lg" />
        </button>
      </header>

      {/* Collapsible Sidebar on Smaller Screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 transition-transform duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} className="text-white" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block py-2 text-gray-300 hover:bg-gray-700 rounded">Home</a>
          <a href="#" className="block py-2 text-gray-300 hover:bg-gray-700 rounded">Shop</a>
          <a href="#" className="block py-2 text-gray-300 hover:bg-gray-700 rounded">Catalogue</a>
          <a href="#" className="block py-2 text-gray-300 hover:bg-gray-700 rounded">About Us</a>

          {/* Move Cart Section Inside the Sidebar */}
          <div className="flex items-center space-x-2 mt-4">
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-500" />
            <span className="text-gray-500">$35,435</span>
          </div>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
