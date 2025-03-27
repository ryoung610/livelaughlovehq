import { useState } from 'react';
import NavBar from '../components/NavBar';
import Slidegame from '../components/Slidegame';
import robcomp from "../assets/robcomp.jpg";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Matching your NavBar links
  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Community-Board', path: '/community-board' },
    { id: 4, name: 'Products', path: '/products' },
  ];

  return (
    <div className="h-screen overflow-y-auto bg-amber-200 justify-center shadow-lg rounded-xl p-4 sm:p-20 w-auto max-w-4xl relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        Welcome to Live, Laugh & Love
      </h1>
      <p className="text-base sm:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
        Empowering innovation with style and technology.
      </p>

      {/* Original NavBar - Hidden on mobile */}
      <div className="hidden sm:block">
        <NavBar />
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mt-8 sm:mt-12 mb-6 sm:mb-8">
        About Us
      </h2>

      <div className="bg-white p-4 sm:p-6 md:p-8 shadow-2xl rounded-2xl">
  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-600 mb-4">
    Our Story
  </h3>
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
    In the heart of a bustling city, amidst lines of code and late-night debugging sessions,{' '}
    <span className="font-bold text-teal-700">LL&L (Live, Laugh, and Love)</span> was born. It started as a
    dream—one developer, a laptop, and a vision to create technology that not only solves problems but also
    inspires creativity.
  </p>
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
    With over <span className="font-bold text-teal-700">10 years of experience</span> in software development, I
    have worked with corporations, startups, and local businesses, crafting solutions that power their success.
    But beyond the corporate world, I’ve always believed in the power of technology to uplift communities. That’s
    why <span className="font-bold text-teal-700">LL&L isn’t just about software—it’s about impact.</span>
  </p>
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
    I come from <span className="font-bold text-teal-700">humble beginnings</span>, where each challenge was a
    stepping stone and every failure a lesson. Now, this journey has led me here—to a company built on
    innovation, passion, and a touch of style. Whether it’s{' '}
    <span className="font-bold text-teal-700">helping businesses thrive in the cloud</span> or creating{' '}
    <span className="font-bold text-teal-700">sunglasses that fund the future</span>, LL&L is about more than
    just technology. It’s about living fully, laughing often, and loving the process of building something
    great.
  </p>
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
    As we embark on this <span className="font-bold text-teal-700">voyage</span> together, I hope LL&L becomes
    not just a tech company but a <span className="font-bold text-teal-700">movement</span>—where creativity
    meets technology, and where every business, big or small, gets the digital tools they need to{' '}
    <span className="font-bold text-teal-700">succeed</span>.
  </p>
</div>

      
      {/* Team Section */}
      <div id="team-section" className=" mt-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl shadow-2xl p-8 text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Meet the Team</h2>
        <p className="text-center text-lg mb-6">
          I am the heart of LL&L — developer and innovator dedicated to shaping the future of tech with passion and creativity.
        </p>
        <div className="flex justify-center">
          <div className=" p-4 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src={robcomp}
              alt="Bobby"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">Bobby</h3>
            <p className="text-gray-600">Founder & Developer</p>
          </div>
        </div>
      </div>

      {/* Puzzle Game Section */}
      <div id="game-section" className="mt-1 sm:mt-1 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 text-center mb-4 sm:mb-6">
          Try Our Puzzle Game
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Slidegame />
          </div>
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

export default About;