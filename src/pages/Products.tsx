import  React from 'react';
import { products } from '../assets/assets'; // Adjust path based on your structure
import NavBar from '../components/NavBar';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Products: React.FC = () => {

 const [isOpen, setIsOpen] = useState(false);

  // Matching your NavBar links
  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Community-Board', path: '/community-board' },
    { id: 4, name: 'Products', path: '/products' },
  ];


  return (
    <div className="h-screen overflow-y-auto bg-amber-200 shadow-lg rounded-xl p-4 sm:p-8 md:p-20 w-full max-w-4xl mx-auto relative">
      {/* Product Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Our Products
        </h1>
        <div className="hidden sm:block">
        <NavBar />
      </div>

        {/* Story Section - Above Products */}
        <div className="max-w-4xl mx-auto mt-6 sm:mt-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Our Story</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
            At{' '}
            <a href="http://www.livelaughlovehq.com" className="text-blue-500 underline">
              LiveLaughLoveHQ
            </a>
            , our sunglasses are more than just accessories—they’re a way to spread joy, embrace innovation, and fuel the growth of our small business. Every pair you buy helps us take a step forward, and I’m excited to share how these sunglasses have shaped our journey so far.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            From vibrant colors to tech-savvy designs, our products are crafted to bring smiles and functionality to your summer adventures.
          </p>
        </div>

        <div className="space-y-6 mt-6 sm:mt-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image - Full width on mobile, 1/3 on larger screens */}
              <div className="w-full sm:w-1/3">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              {/* Product Info and Buttons - Full width on mobile, 2/3 on larger screens */}
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">{product.description}</p>
                  {product.subCatagory && (
                    <p className="mt-1 text-xs sm:text-sm text-blue-500">{product.subCatagory}</p>
                  )}
                  {product._id === "donation" && (
                    <p className="mt-2 text-xs sm:text-sm text-green-600">
                      Includes a donation to support our business growth
                    </p>
                  )}
                  <p className="mt-2 text-base sm:text-lg text-gray-800 font-bold">
                    ${product.price}
                  </p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-blue-600 transition text-sm sm:text-base">
                    Add to Cart
                  </button>
                  <button className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-green-600 transition text-sm sm:text-base">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Navigation - Visible only on mobile */}
      <div className="block sm:hidden fixed bottom-4 right-4 z-50">
        {isOpen && (
          <div className="absolute bottom-12 right-0 bg-gray-900 text-white shadow-lg rounded-lg p-4 w-48 transition-all duration-300 ease-in-out">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="block px-2 py-1 rounded-md bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-full hover:from-pink-500 hover:to-red-500 transition-all duration-300 focus:outline-none"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Products;

