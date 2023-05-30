import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 mb-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Image src={logo} alt="Logo" className='absolute' width={200}/>
        </div>
        {/* Menu */}
        <nav className="flex items-center justify-center space-x-4 w-full">
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
