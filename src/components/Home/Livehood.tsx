import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { livehood } from '@/assets/Home';

export default function Livehood() {
  return (
    <div className="bg-white py-4 px-4 md:px-28">
  <main className="container mx-auto py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center items-start p-4 md:p-11">
        <h1 className="text-orange-400 text-lg">Livelihood Programs</h1>
        <h1 className="text-black text-3xl md:text-5xl mt-4">Creating sustainable livelihoods</h1>
        <p className="text-base md:text-lg leading-loose mt-4">
          We empower individuals and families through skill development and microfinance initiatives, fostering self-sufficiency.
        </p>
        <button className="bg-orange-500 text-white hover:bg-gray-950 hover:text-white font-bold py-2 md:py-4 px-6 md:px-11 rounded mt-8">
          Donate <ArrowRightAltIcon />
        </button>
      </div>
      <div className="flex justify-center items-center p-4">
        <img src={livehood.src} alt="Placeholder Image" className="md:w-full w-full h-auto rounded-md" />
      </div>
    </div>
  </main>
</div>

  )
}
