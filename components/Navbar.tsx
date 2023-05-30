// Header.tsx
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
        </li>
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
        </li>
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">Collection</a>
        </li>
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">Wishlist</a>
        </li>
        </ul>
      </div>
      <Image src={logo} alt="Logo" width={200} height={50} className='ml-10'/>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
        </li>
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
        </li>
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">Collection</a>
        </li>
        <li>
        <a href="#" className="text-gray-800 hover:text-gray-600">Wishlist</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      {/* call to action button */}
    </div>
  </div>
  );
};

<div className="navbar bg-base-100">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <Image src={logo} alt="Logo" width={200} height={50} />
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Collection</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Wishlist</a>
    </ul>
  </div>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Collection</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Wishlist</a>
  </ul>
</div>
</div>



export default Navbar;
