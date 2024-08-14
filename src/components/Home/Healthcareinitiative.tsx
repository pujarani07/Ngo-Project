import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { health } from '@/assets/Home';

export default function Healthcareinitiative() {
  return (
    <main className="container mx-auto px-4 md:px-28 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex justify-center items-center p-4">
      <img src={health.src} alt="Placeholder Image" className="max-w-full h-auto rounded-md" />
    </div>
    <div className="flex flex-col justify-center items-start p-4 md:p-11">
      <h1 className="text-orange-400 text-lg">Healthcare Initiatives</h1>
      <h1 className="text-black text-3xl md:text-5xl mt-4">Essential healthcare plans and services</h1>
      <p className="text-base md:text-lg leading-loose mt-4">
        We offer essential healthcare services and wellness programs to improve health outcomes and promote well-being.
      </p>
      <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-2 md:py-4 px-6 md:px-11 rounded mt-8">
        Donate <ArrowRightAltIcon />
      </button>
    </div>
  </div>
</main>

  )
}
