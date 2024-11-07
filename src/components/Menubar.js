import React from 'react'
import logo from '../images/logo.png'

import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
const Menubar = () => {
  return (
    <div >
      <div className='bg-brown py-3 text-center text-white text-sm'>
        <p>Free express worldwide shipping. Subscribe to discover</p>
      </div>
      <nav className='flex items-center justify-between px-10 py-10 fixed top-0 w-full bg-white shadow-md z-50'>
       <div className='flex items-center h-8  space-x-40'>
        <img src={logo} className='w-20'/>
        <div>
          <ul className='flex space-x-14 items-center mt-1'>
            <li>Home</li>
            <li>Shop</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Page</li>
          </ul>
        </div>
       </div>
       <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <IoSearchOutline className="text-3xl cursor-pointer  hover:text-theme" />

          {/* User Icon */}
          <HiOutlineUser className="text-3xl cursor-pointer hover:text-theme" />

          {/* Wishlist Icon with Count */}
          <div className="relative">
            <FaRegHeart className="text-2xl cursor-pointer hover:text-theme" />
            <span className="absolute -top-2 -right-2 bg-brown text-white text-xs rounded-full px-1">0</span>
          </div>

          {/* Cart Icon with Count */}
          <div className="relative">
            <AiOutlineShopping className="text-3xl cursor-pointer hover:text-theme" />
            <span className="absolute -top-1 -right-1 bg-brown text-white text-xs rounded-full px-1">0</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menubar