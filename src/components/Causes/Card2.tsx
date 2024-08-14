import React from "react";
import { card2 } from "@/util/home/index";

export default function Card2() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-7 p-5 md:p-10 lg:p-20">
      {card2.map((item, index) => (
        <div key={index} className="border rounded-md shadow-md p-2">
          <img
            src={item.image.src}
            alt={item.title}
            className="w-full h-56 object-cover"
          />
          <div className="py-4 px-4 text-center">
            <h3 className="text-xl md:text-2xl font-semibold hover:text-orange-600 mb-2 mt-4">
              {item.title}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              {item.content}
            </p>
          </div>
          <hr className="h-px my-6 bg-gray-300 border-0" />
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div className="w-72 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
          <div className="flex flex-row justify-between p-4">
            <span className="text-gray-600 text-2xl md:text-3xl">
              {item.price}
            </span>
            <span className="text-gray-600 text-xl md:text-2xl">
              {item.donation}
            </span>
          </div>
          <div className="flex flex-row justify-between py-0">
            <span className="flex flex-row ml-5 text-gray-600 text-lg md:text-xl">
              {item.range}
            </span>
            <span className="text-gray-600 text-xl md:text-2xl px-4">
              donations
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}