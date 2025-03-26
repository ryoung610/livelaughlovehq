// components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-400 to-gray-900 bg-opacity-90 shadow-lg  backdrop-blur-md border-transparent p-4 rounded-2xl m-4">
      <div className="flex justify-center">
        <div className="flex space-x-4 text-xl">
        <Link to="/"   className="text-white  font-black shadow-lg px-4 py-4 rounded-lg border border-transparent bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:text-black hover:to-red-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >Home</Link>
          <Link to="/about"   className="text-white font-black shadow-lg px-4 py-4 rounded-lg border border-transparent bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:text-black hover:to-red-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >About</Link>
          <Link to="/community-board"  className="text-white font-black shadow-lg px-4 py-4 rounded-lg border border-transparent bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:text-black hover:to-red-500 transition-all duration-300 ease-in-out transform hover:scale-105">Community-Board</Link>
          <Link to="/products"  className="text-white font-black shadow-lg px-4 py-4 rounded-lg border border-transparent bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:text-black hover:to-red-500 transition-all duration-300 ease-in-out transform hover:scale-105">Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
