import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { water } from '@/assets/Home';
export default function Wateraccess() {
  return (
    
    <main className="container mx-auto px-4 md:px-28 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center p-4">
        <img src={water.src} alt="Placeholder Image" className="max-w-full h-auto rounded-md" />
      </div>
      <div className="flex flex-col justify-center items-start p-4 md:p-11">
        <h1 className="text-orange-400 text-lg">Access to Water</h1>
        <h1 className="text-black text-3xl md:text-5xl mt-4">Ensuring Clean Water Access</h1>
        <p className="text-base md:text-lg leading-loose mt-4">
          Implementing sustainable water solutions to provide safe drinking water, reducing waterborne diseases and improving health.
        </p>
        <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-2 md:py-4 px-6 md:px-11 rounded mt-8">
          Donate <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  </main>
  
    
  )
}
