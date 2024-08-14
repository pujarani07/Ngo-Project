import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { volunteer } from '@/assets/Home';

export default function Volunteer() {
  return (
    <div className="bg-white py-4 px-4 md:px-28">
  <main className="container mx-auto py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center items-start p-4 md:p-11">
        <h1 className="text-orange-400 text-xl md:text-lg">Be an integral part of the team</h1>
        <h1 className="text-black text-3xl md:text-5xl mt-2 md:mt-4">Become a volunteer</h1>
        <p className="text-base md:text-lg leading-loose mt-2 md:mt-4">
          Join our community and create a great profile to make the most of our services.
        </p>
        <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-3 px-6 md:py-4 md:px-11 rounded mt-6 md:mt-8">
          Get Involved <ArrowRightAltIcon />
        </button>
        <p className="text-gray-500 mt-4 md:mt-5">SIGN UP FOR OUR MOST-NEEDED POSITIONS</p>
      </div>
      <div className="flex justify-center items-center p-4">
        <img src={volunteer.src} alt="Placeholder Image" className="w-full h-auto max-w-md md:max-w-full rounded-md" />
      </div>
    </div>
  </main>
</div>

  )
}
