import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Businesstodo from '../pages/Businesstodo';
import Lifestyletodo from '../pages/Lifestyletodo';
import Innovationtodo from '../pages/Innovationtodo';
import Artstodo from '../pages/Artstodo';
import { FaBars, FaTimes } from 'react-icons/fa';

const CommunityBoard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Add this for programmatic navigation

  const categories = [
    { name: "Business & IT Services", description: "Discuss tech solutions and business growth strategies.", slug: "business" },
    { name: "Relationships & Lifestyle", description: "Talk about personal growth, relationships, and life experiences.", slug: "lifestyle" },
    { name: "Innovative Tech Projects", description: "Explore and share cutting-edge technology projects.", slug: "techprojects" },
    { name: "Creative Arts & Design", description: "Showcase and discuss art, music, and design ideas.", slug: "artsdesign" },  
  ];

  // Navigation items matching your NavBar
  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Community-Board', path: '/community-board' },
    { id: 4, name: 'Products', path: '/products' },
  ];

  // Handle navigation click
  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="h-screen overflow-y-auto bg-amber-200 shadow-lg rounded-xl p-4 sm:p-20 w-full max-w-4xl mx-auto relative">
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to the LL&L Projects Community Board
      </motion.h1>

      {/* Original NavBar - Hidden on mobile */}
      <div className="hidden sm:block">
        <NavBar />
      </div>

      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Engage in interactive discussions, share ideas, and connect with like-minded individuals.
      </p>

      <Routes>
        <Route
          path="/" // Matches /community-board
          element={
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-200 to-blue-800 rounded-lg shadow-md overflow-hidden mb-5 w-full"
                >
                  <div className="p-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">{category.name}</h2>
                    <p className="mt-2 text-gray-800">{category.description}</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-400 to-gray-800 p-2 text-center text-red-500">
                    <Link to={category.slug} className="font-medium hover:opacity-80">
                      Join Discussion
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          }
        />
        {/* Relative routes */}
        <Route path="business" element={<Businesstodo category="business" />} />
        <Route path="lifestyle" element={<Lifestyletodo category="lifestyle" />} />
        <Route path="techprojects" element={<Innovationtodo category="techprojects" />} />
        <Route path="artsdesign" element={<Artstodo category="artsdesign" />} />
      </Routes>

      {/* Floating Navigation - Visible only on mobile */}
      <div className="block sm:hidden fixed bottom-4 right-4 z-50">
        {isOpen && (
          <div className="absolute bottom-12 right-0 bg-gray-900 text-white shadow-lg rounded-lg p-4 w-48 transition-all duration-300 ease-in-out">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="block w-full text-left px-2 py-1 rounded-md bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition-all duration-300"
                  >
                    {item.name}
                  </button>
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

export default CommunityBoard;