import React from 'react'
import img from '../images/back-3.jpg'

const Back = () => {
  return (
    <div className='h-screen bg-cover bg-center px-10 flex flex-col justify-center' style={{
        backgroundImage : `url(${img})`
    }}>
<h1 className='text-white text-6xl font-bold'>Refined Sophistication</h1>
<p className='mt-5 text-white'>These rings often feature sleek and minimalist designs crafted from <br/> high-quality materials such as platinum,..</p>
<button className='px-3 py-2 border-[1px] border-white w-40 text-white font-semibold mt-5'>Shop Now </button>
    </div>
  )
}

export default Back