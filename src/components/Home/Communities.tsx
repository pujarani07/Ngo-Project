import { cardArr } from "@/util/home";
import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Communities() {
  return (
    <div className="bg-orange-50 p-4 md:p-8">
  <div className="flex flex-col items-center text-center mb-8">
    <h1 className="text-xl md:text-2xl text-orange-400 mb-4">
      A Partnership Approach to Sustainable Conservation
    </h1>
    <p className="text-2xl md:text-4xl font-bold">
      Choose Us for Impactful Change in Global Communities
    </p>
  </div>
  
  <div className="flex justify-center items-center mb-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-11">
      {cardArr.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="flex flex-col bg-white rounded w-full border shadow-md p-6 md:p-8 transition-transform ease-in-out duration-500 hover:scale-105 hover:shadow-lg"
          >
            <div className="flex flex-col items-center">
              <IconComponent className="text-orange-500 text-4xl md:text-6xl mb-4" />
              <h1 className="text-lg md:text-xl font-bold mb-2">{item.title}</h1>
              <p className="text-base md:text-lg text-center">
                {item.paragraph}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  
  <div className="flex justify-center items-center">
    <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-3 px-6 md:py-4 md:px-11 rounded mt-8 flex items-center">
      See Our Work <ArrowRightAltIcon className="ml-2" />
    </button>
  </div>
</div>

  );
}
