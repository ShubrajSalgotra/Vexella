import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
        <div className="text-2xl font-bold text-blue-600">Vexella Pharmaceuticals</div>
        {/* <div>
          <img
            src={logo}
            alt="Hero Image"
            className="w-full max-w-14 lg:max-w-14"
          /></div> */}

        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#product" className="text-gray-700 hover:text-blue-500">Product</a>
        </div>
        {/* <div></div> */}

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#About" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="#product" className="text-gray-700 hover:text-blue-500">Product</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
