import React from 'react'
import img1 from '../images/look-2.jpg'
import img2 from '../images/look-1.jpg'
const Look = () => {
  return (
    <div className='px-10 py-10 flex space-x-40 w-full'>
        <div className='h-screen w-1/2'>
        <img src={img1}  className='object-cover'/>
        </div>
        <div className='w-1/2 h-full '>
        <div className='w-full h-3/4'>
        <img src={img2} />
        </div>
        <h1 className='text-4xl font-semibold mt-10'>Golden Embrace</h1>
        <p className='mt-3 text-sm'> Update the latest and most attractive promotions. Get instant <br />information about attractive offers and the…</p>
        </div>
    </div>
  )
}

export default Look