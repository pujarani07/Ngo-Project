import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import image from 'next/image';
import {cards} from '@/util/home/index'


const ImpactCauses = () => {
  return (
    <div className="py-8 px-4 md:px-20">
    <div className="flex flex-col md:flex-row justify-between items-start mb-8">
      <div className="p-4 md:p-7">
        <h1 className="text-orange-500 text-lg">Impact Causes</h1>
        <h1 className="text-black text-3xl md:text-5xl font-bold mt-2">
          Support Development and
        </h1>
        <h1 className="text-black text-3xl md:text-5xl font-bold mt-2">
          Transform Lives
        </h1>
      </div>
      <div className="flex justify-center md:justify-end items-center mt-4 md:mt-0 p-4 md:p-16">
        <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-2 px-4 rounded h-12 flex items-center">
          All Causes <ArrowRightAltIcon className="ml-2" />
        </button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between p-4">
      {cards.map((item, index) => (
        <div key={index} className="border rounded-md shadow-md w-full md:w-1/2 lg:w-1/4">
          <img src={item.image.src} alt={item.title} className="w-full h-56 object-cover rounded-t-md" />
          <div className="py-4 px-4 text-center">
            <h3 className="text-xl md:text-2xl font-semibold hover:text-orange-600 mb-2 mt-4">{item.title}</h3>
            <p className="text-gray-600 text-base md:text-xl mb-4">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ImpactCauses;