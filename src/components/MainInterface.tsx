import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const MainInterface: React.FC = () => {
  return (
    <div className="bg-amber-200 shadow-lg rounded-xl p-20 h-auto w-auto max-w-4xl">
       
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 ">Welcome to LL&L</h1>
        <p className="text-gray-800 ">Where technology meets style.</p>

       
        <p className="text-gray-600 mt-2">Explore our collections and discover more.</p>
      </div>

      {/* Learn More & Shop Now Section */}
      <div className="flex justify-evenly m-5">
        <Link to="/about" className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-300 transition duration-300">
          Learn More
        </Link>
        <Link to="/products" className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-400 transition duration-300">
          Shop Now
        </Link>
        
      </div>
      <div className="flex justify-center">
        <p className=" font-black font-serif italic  ">Our Community</p>
        </div>
      <div className="text-center mb-8">
      <NavBar />
      </div>
      {/* Video Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Repeat video blocks */}
        <div className="bg-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Video 1</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae.</p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Video 2</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae.</p>
      </div>
      <div className="bg-gray-300 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Video 3</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae.</p>
      </div>
    </div>
    </div>
  );
};

export default MainInterface;
