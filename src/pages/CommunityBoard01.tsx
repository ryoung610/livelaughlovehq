// pages/CommunityBoard.tsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Businesstodo from '../pages/Businesstodo'; // Import your category components
import Lifestyle from '../pages/Lifestyletodo';
import TechProjects from '../pages/Innovationtodo';
import ArtsDesign from '../pages/Artstodo';

const CommunityBoard: React.FC = () => {
  const categories = [
    { name: "Business & IT Services", description: "Discuss tech solutions and business growth strategies.", slug: "business" },
    { name: "Relationships & Lifestyle", description: "Talk about personal growth, relationships, and life experiences.", slug: "lifestyle" },
    { name: "Innovative Tech Projects", description: "Explore and share cutting-edge technology projects.", slug: "techprojects" },
    { name: "Creative Arts & Design", description: "Showcase and discuss art, music, and design ideas.", slug: "artsdesign" },
  ];

  return (
    <div className="h-screen overflow-y-auto bg-amber-200 shadow-lg rounded-xl p-20 w-full max-w-4xl mx-auto">
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to the LL&L Projects Community Board
      </motion.h1>
      <NavBar />

      {/* Subtitle */}
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Engage in interactive discussions, share ideas, and connect with like-minded individuals.
      </p>

      {/* Nested Routes */}
      <Routes>
        {/* Default route: Show the category list */}
        <Route
          path="/"
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
        {/* Category sub-routes */}
        <Route path="business" element={<Businesstodo />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="techprojects" element={<TechProjects />} />
        <Route path="artsdesign" element={<ArtsDesign />} />
      </Routes>
    </div>
  );
};

export default CommunityBoard;