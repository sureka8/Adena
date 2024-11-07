import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black h-96 px-10 text-white py-10'>
        <div className='flex w-full'>
            <div className='w-1/5 '>
            <h1 className='text-xl font-bold uppercase'>Contact Us</h1>
            <p className='mt-5 text-sm'>Tower of London, London EC3N 4AB, United Kingdom.</p>
            <p className='mt-3 text-sm'>(+84) 123 567 712</p>
            <p className='mt-3 text-sm'>jewelryshop@gmail.com</p>
            <div className='mt-3 flex space-x-3'>
                <div  className='border-[1px] border-white rounded-full p-2 text-xl'><FaYoutube/></div>
                <div  className='border-[1px] border-white rounded-full p-2 text-xl'><FaFacebookF/></div>
                <div  className='border-[1px] border-white rounded-full p-2 text-xl'><FaInstagramSquare/></div>
                <div  className='border-[1px] border-white rounded-full p-2 text-xl'><FaLinkedinIn/></div>
            </div>
            </div>
            <div className='w-3/5  text-center mt-5  flex items-center justify-center flex-col'>
            <h1 className='text-2xl font-bold uppercase'>Newsletter Sign-up</h1>
            <p className='mt-3'>Get insider information about exclusive offers, events and more.</p>
            <form class="w-full max-w-sm">
  <div class="flex items-center justify-center border-b border-white py-2 mt-5">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
    <button class="flex-shrink-0 bg-white  border-white text-sm border-4 text-black py-1 px-2 " type="button">
   SEND
    </button>
   
  </div>
</form>
            </div>
            <div className='w-1/5'>
            <h1 className='text-xl font-bold uppercase'>Information</h1>
            <ul className='text-sm mt-3 flex flex-col space-y-2'>
                <li>Faq</li>
                <li>Size guide</li>
                <li>Shipping</li>
                <li>Order status</li>
                <li>Exchanges</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer