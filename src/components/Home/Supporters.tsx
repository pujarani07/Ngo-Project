import { supportArr } from '@/util/home'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Supporters() {
  return (
    <div className="bg-orange-50 p-4 md:p-8">
    <main className="container mx-auto">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-xl md:text-2xl text-orange-400 mb-2 md:mb-4">
          Hear from our supporters
        </h1>
        <p className="text-3xl md:text-4xl font-bold mb-2">
          Voices of impact.
        </p>
        <p className="text-3xl md:text-4xl font-bold">
          Our supporters share stories
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-5">
        {supportArr.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-md border shadow-md p-4 md:p-8 transform transition-transform duration-500 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <img src={item.image.src} alt='' className='w-16 h-16 md:w-20 md:h-20 mb-4' />
              <h1 className="text-lg md:text-xl font-bold mb-2 text-center">{item.title}</h1>
              <p className="text-base md:text-lg leading-loose text-center">
                {item.paragraph}
              </p>
              <div className='flex items-center mt-6'>
                <img src={item.profile.src} alt='' className='w-12 h-12 md:w-16 md:h-16 rounded-full'/>
                <div className='flex flex-col ml-3'>
                  <h1 className='font-bold text-sm md:text-base'>{item.name}</h1>
                  <h1 className='text-sm md:text-base'>{item.profession}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      <div className='flex justify-center items-center mt-8'>
        <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-3 px-6 md:py-4 md:px-11 rounded">
          Get Involved <ArrowRightAltIcon />
        </button>
      </div>
    </main>
  </div>
  
  )
}
