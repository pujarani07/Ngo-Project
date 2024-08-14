import React from 'react';

import image from 'next/image';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {teamArr} from '@/util/home/index'

export default function Teammembers(){
  return (
    <div className="bg-gray-100 mb-7 ">
  <div className="text-center mb-8 px-4">
    <h1 className="text-xl text-orange-400 mb-4">Team members</h1>
    <h1 className='text-2xl md:text-4xl font-bold'>
      The talented team <br className="hidden md:block"/> behind our services
    </h1>
    <p className="text-lg md:text-xl text-gray-500 mt-3">
      Meet our dedicated team members who work tirelessly to <br className="hidden md:block"/> fulfill our mission and make a positive impact.
    </p>
  </div>
  
  <div className='flex flex-col md:flex-row justify-center items-center gap-5 px-4 md:px-6 '>
    {teamArr.map((item, index) => (
      <div key={index} className="border rounded-md overflow-hidden shadow-md transform transition-transform duration-500 hover:scale-105 w-full md:w-96 md:mb-7 mb-7">
        <img src={item.image.src} className="w-full h-80 md:h-80 object-cover" alt={item.title} />
        <div className="py-4 px-4 text-center bg-white">
          <h3 className="text-lg md:text-2xl font-semibold mb-2 mt-4">{item.title}</h3>
          <p className="text-black text-base md:text-lg mb-4">Volunteer</p>
          <div className='flex justify-center'>
            <ul className='flex flex-row gap-2'>
              <li className='hover:bg-blue-600 rounded-full p-2'><FacebookRoundedIcon/></li>
              <li className='hover:bg-blue-600 rounded-full p-2'><TwitterIcon/></li>
              <li className='hover:bg-blue-600 rounded-full p-2'><LinkedInIcon/></li>
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};
