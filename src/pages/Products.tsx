import React from 'react';
import NavBar from '../components/NavBar';

const Products: React.FC = () => {
  return (
    <div className="p-8">
      <NavBar />
      <h1 className="text-4xl font-bold">Shop Our Products</h1>
      <p className="mt-4 text-lg">This is where you can display your product list.</p>
    </div>
  );
};

export default Products;
