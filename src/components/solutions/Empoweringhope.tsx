import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { c5 } from '@/assets/Home';
export default function Empoweringhope() {
  return (
    <section className=' py-4 px-4 md:px-28'>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-orange-100 rounded-md mx-auto max-w-screen-2xl ">
    <div className="flex flex-col justify-center items-start p-4 md:p-8 lg:p-20">
      <h1 className='text-orange-400 text-lg md:text-xl lg:text-2xl'>
        Empowering hope
      </h1>
      <h1 className='text-black text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-4 font-bold'>
        Our work creates lasting change
      </h1>
      <p className="text-base md:text-lg leading-loose mt-2 md:mt-4">
        Join us in a collective journey of compassion and impact as we work hand in hand, transforming lives.
      </p>
      <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-2 px-6 md:py-4 md:px-11 rounded mt-4 md:mt-8">
        Make a Donation <ArrowRightAltIcon/>
      </button>
      <div className='mt-4'>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-5 text-black'>
          <li className='flex items-center'><CheckCircleOutlineOutlinedIcon className='fill-orange-400 mr-2'/>Education</li>
          <li className='flex items-center'><CheckCircleOutlineOutlinedIcon className='fill-orange-400 mr-2'/>Healthcare</li>
          <li className='flex items-center'><CheckCircleOutlineOutlinedIcon className='fill-orange-400 mr-2'/>Clean water</li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center items-center h-full">
      <img src={c5.src} alt="Placeholder Image" className="max-w-full h-auto rounded-md" />
    </div>
  </div>
</section>

  
  )
}
