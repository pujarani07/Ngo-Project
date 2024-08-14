import { image2 } from '@/assets/Home'
import { contactArr } from '@/util/home';
import React from 'react'
import { useRouter } from 'next/router';

export default function ContactUs() {
 
  return (
    <section className='py-4 px-4 md:px-28 h-full'>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-orange-50 rounded-md  h-full">
    <div className="flex flex-col justify-center items-start h-full p-4">
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
    <div className="flex items-center h-full">
      <img src={image2.src} alt="Placeholder Image" className="w-full h-full object-cover rounded-md" />
    </div>
  </div>

  <div className="flex justify-center items-center p-5 mt-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-11 w-full">
      {contactArr.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="flex flex-col rounded w-full h-full p-6 md:p-8 group border border-none bg-white">
            <div className="flex flex-row items-start">
              <IconComponent className="bg-orange-500 text-7xl rounded-full md:text-6xl lg:text-5xl text-white p-3" />
              <div className='flex flex-col ml-4 md:ml-7'>
                <h1 className="text-lg md:text-xl font-bold mb-2 group-hover:text-orange-500">{item.title}</h1>
                <p className="text-base md:text-lg leading-loose">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

  

  )
}
