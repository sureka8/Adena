import React, { useState } from "react";
import img11 from "../images/pro1.jpg";
import img12 from "../images/pro12.jpg";
import img21 from "../images/pro2.jpg";
import img22 from "../images/pro22.jpg";
import img31 from "../images/pro3.jpg";
import img32 from "../images/pro31.jpg";
import img41 from "../images/pro4.jpg";
import img42 from "../images/pro41.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { PiArrowsClockwise } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
const Featuredcollections = () => {
  const products = [
    {
      id: 1,
      img1: img11,
      img2: img12,
      name: "Snake Necklace",
      price: "100.00$ – 120.00$",
    },
    {
      id: 2,
      img1: img21,
      img2: img22,
      name: "Mini Magma Hoops",
      price: "250.00$",
    },
    {
      id: 3,
      img1: img31,
      img2: img32,
      name: "Chicago Hoops",
      price: "40.00$ – 60.00$",
    },
    {
      id: 4,
      img1: img41,
      img2: img42,
      name: "Gold Bold Mini Hoops",
      price: "40.00$ – 60.00$",
    },
  ];

  return (
    <div className="px-10 py-10 mt-10">
      <h1 className="text-center text-3xl font-semibold">Featured Collection</h1>
      <div className="mt-5 grid grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="h-auto w-full group">
            <div className="relative h-96 overflow-hidden">
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
              <div className="absolute top-[21rem] inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black py-3 text-white text-center hover:bg-theme">ADD TO CART</div>
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
  );
};

export default Featuredcollections;
