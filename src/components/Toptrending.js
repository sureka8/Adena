import React from 'react'
import pro1 from '../images/top1.jpg'
import pro1_1 from "../images/top1-2.jpg"
import pro2 from '../images/top2.jpg'
import pro2_1 from "../images/top2-1.jpg"
import pro3 from "../images/top3.jpg"
import pro3_1 from '../images/top3-1.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { PiArrowsClockwise } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

export const Toptrending = () => {
    const products = [
        {
          id: 1,
          img1: pro1,
          img2: pro1_1,
          name: "Sugar ring set",
          price: "40.00$ – 110.00$",
        },
        {
          id: 2,
          img1: pro2,
          img2: pro2_1,
          name: "Oval Mini Stamp Ring",
          price: "150.00$",
        },
        {
          id: 3,
          img1: pro3,
          img2: pro3_1,
          name: "Onda Ring Set",
          price: "40.00$ – 60.00$",
        },
      
      ];
  return (
    <div className="px-10  mt-10">
    <h1 className="text-center text-3xl font-semibold">Featured Collection</h1>
    <div className="mt-5 grid grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="h-screen w-full group">
          <div className="relative h-3/4 overflow-hidden">
            <span className="absolute top-2 right-5 bg-black px-2 text-sm">HOT</span>
            
            {/* Image Container with Hover Effect */}
            <img
              src={product.img1}
              alt={product.name}
              className="w-full h-full object-cover transition duration-500 transform group-hover:opacity-0"
            />
            <img
              src={product.img2}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 transform group-hover:opacity-100"
            />

            {/* Overlay Buttons */}
            <div className="absolute inset-0 flex space-x-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <button className="bg-white p-3 rounded-full text-2xl hover:bg-theme hover:text-white"><IoSearchOutline /></button>
              <button className="bg-white p-3 rounded-full text-2xl hover:bg-theme hover:text-white"><FaRegHeart /></button>
              <button className="bg-white p-3 rounded-full text-2xl hover:bg-theme hover:text-white"><PiArrowsClockwise /></button>
            </div>
           
          </div>

          {/* Product Details */}
          <div className="h-20 mt-5 text-center">
            <h2 className="uppercase font-bold">{product.name}</h2>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
