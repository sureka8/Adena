import React, { useEffect, useState } from "react";
import img1 from '../images/slider-10.jpg'
import img2 from '../images/slider-11.jpg'
import img3 from '../images/slider-12.jpg'

const Slider = () => {
  const slides = [
    {
      image: img1, // Replace with your image URL
      text: "Earrings For Sophisticated Style Delicate",
      paragraph:"Among them and beautiful earring designs that not..",
      btn:"Shop Now"
    },
    {
      image: img2, // Replace with your image URL
      text: "Glamour And Giltz To Your Style With Stunning",
      paragraph:"Despite being highly aesthetic, te price of products...",
      btn:"Shop Now"
    },
    {
      image: img3, // Replace with your image URL
      text: "Elevate Your Look With Modern Jewelery",
      paragraph:'The chain design is luxurious,elegant but no less...',
      btn:"Shop Now"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative flex items-center  w-full h-screen ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Text Section */}
          <div className="w-2/5 mt-10 px-20">
            <h2 className="text-5xl leading-relaxed ">{slide.text}</h2>
            <p className="mt-5">{slide.paragraph}</p>
            <button className=" mt-5 px-5 py-2 border-[1px] border-black">{slide.btn}</button>
            
          </div>
          {/* Image Section */}
          <div className="w-3/5 h-full">
            <img
              src={slide.image}
              alt="Slide"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
