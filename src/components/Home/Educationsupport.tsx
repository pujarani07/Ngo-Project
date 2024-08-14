import React from 'react'
import { edu } from '@/assets/Home';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

export default function Educationsupport() {
  return (
    <div className="bg-white py-4 px-4 md:px-28">
      <div className=''>
  <div className="hidden md:flex justify-between items-center space-x-4">
    <Link href="#" className="whitespace-nowrap px-4 py-2 border-b-2 border-transparent hover:border-blue-500">
      Education Support
    </Link>
    <Link href="#" className="whitespace-nowrap px-4 py-2 border-b-2 border-transparent hover:border-blue-500">
      Health Initiatives
    </Link>
    <Link href="#" className="whitespace-nowrap px-4 py-2 border-b-2 border-transparent hover:border-blue-500">
      Livelihood Programs
    </Link>
    <Link href="#" className="whitespace-nowrap px-4 py-2 border-b-2 border-transparent hover:border-blue-500">
      Access to Water
    </Link>
  </div>
  <hr className="border-gray-200 w-full" />
</div>

  <main className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center items-start p-4 md:p-11">
        <h1 className="text-orange-400 text-lg">Education Support</h1>
        <h1 className="text-black text-3xl md:text-5xl mt-4">Empowering futures through education</h1>
        <p className="text-base md:text-lg leading-loose mt-4">
          We provide access to quality education for underprivileged children, unlocking their potential and brightening their future.
        </p>
        <button className="bg-orange-500 text-white hover:bg-gray-950 hover:text-black font-bold py-2 md:py-4 px-6 md:px-11 rounded mt-8">
          Donate <ArrowRightAltIcon />
        </button>
      </div>
      <div className="flex justify-center items-center p-4">
        <img src={edu.src} alt="Placeholder Image" className="max-w-full h-auto rounded-md" />
      </div>
    </div>
  </main>
</div>

    
  );
};


  

