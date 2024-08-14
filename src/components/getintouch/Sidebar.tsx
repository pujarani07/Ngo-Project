import { image2 } from '@/assets/Home'
import { contactArr } from '@/util/home';
import React from 'react'
import { useRouter } from 'next/router';

export default function Sidebar({open}:any) {
 
  return (
    <div className={`${open?"flex flex-col justify-center items-start":"hidden"} h-full p-4 absolute top-20 right-0 z-50 bg-white ${open ? "w-96": "w-0"} !transition-all !duration-500 !ease-in-out `}>
    <h1 className='text-orange-400 text-lg'>Contact Us</h1>
    <h1 className='text-black text-3xl md:text-4xl lg:text-5xl mt-4 font-bold'>How can we help?</h1>
    <p className="text-base md:text-lg leading-loose mt-4">
      Have a question or feedback? Fill out the form below, and we'll get back to you.
    </p>
    <form className='mt-4 flex flex-col w-full gap-4 h-full'>
      <input type='text' name='name' placeholder='Name' className='border border-gray-200 h-12 md:h-14 rounded px-5' />
      <input type='text' name='email' placeholder='Email' className='border border-gray-200 h-12 md:h-14 rounded px-5' />
      <textarea rows={5} name='message' placeholder='Message' className='border border-gray-200 rounded px-5 h-24 md:h-28' />
      <button className='bg-orange-400 p-3 md:p-4 rounded-md hover:bg-gray-950 text-lg md:text-xl text-white'>Submit</button>
    </form>
  </div>

  

  )
}
