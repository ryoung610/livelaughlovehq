// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import CommunityBoard from './pages/CommunityBoard';
import Products from './pages/Products';
import NavBar from './components/NavBar';
import MainInterface from './components/MainInterface';


const App: React.FC = () => {
  return (
    <Router>
     
      <Routes>
        {/* Home Page (Main Interface) */}
        <Route path="/" element={<MainInterface />} />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />
        
        {/* Community Board Page */}
        <Route path="/community-board/*" element={<CommunityBoard />} />
        
        {/* Products Page */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
