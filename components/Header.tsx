// Header.tsx
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 mb-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="w-32">
          <Image src={logo} alt="Logo" layout="responsive" width={200} height={50} />
        </div>
        <nav className="flex items-center justify-center space-x-4 flex-grow">
          <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Collection</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Wishlist</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
