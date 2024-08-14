import { getArr } from '@/util/home';
import React from 'react'

export default function Givetime() {
  return (
    <div className=" mx-4 md:mx-8 lg:mx-auto px-4 md:px-8 lg:px-28 py-8 bg-orange-50">
    <div className="p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-orange-400 mb-4">
          Give your time
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Other ways to get involved
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-3 text-center">
          Beyond donations, you can support us by campaigning for change, and volunteering your time.
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center p-5 mt-4">
    <div className="grid grid-cols-1  md:grid-cols-3 gap-8 md:gap-11">
      {getArr.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="flex flex-col rounded w-full h-full  md:p-8 group border border-none ">
            <div className="flex flex-row items-start">
              <IconComponent className="bg-orange-500 text-6xl  rounded-full md:text-6xl lg:text-5xl text-white p-3" />
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
    {/* <div className="flex flex-wrap justify-center items-center p-4 md:p-5 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-11">
        {getArr.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-lg p-4 md:p-6 lg:p-8 gap-4"
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center justify-center bg-orange-500 text-white rounded-full p-4 md:p-5 mb-4 md:mb-0">
                  <IconComponent className="text-3xl md:text-5xl lg:text-3xl" />
                </div>
                <div className='flex flex-col md:ml-5'>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{item.title}</h1>
                  <p className="text-base md:text-lg lg:text-xl leading-loose">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div> */}
  </div>
  
  )
}
