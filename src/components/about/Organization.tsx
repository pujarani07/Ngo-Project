

import { organizArr } from '@/util/home/index';

export default function organization() {

  return (
  
    <div className="main-container flex flex-col md:flex-row justify-center h-[100vh] items-center p-7">
    {/* Left Column */}
    <div className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-10 mb-8 md:mb-0">
      {organizArr.slice(0, Math.ceil(organizArr.length / 2)).map((item, index) => (
        <div key={index} className="max-w-md w-full bg-white rounded-xl hover:bg-orange-400 overflow-hidden shadow-lg p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <h1 className="text-black text-2xl md:text-3xl">{item.heading}</h1>
            <p className="text-gray-600 text-base md:text-lg mt-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
    
    {/* Vertical Line Divider */}
    <div className="hidden md:block w-px h-full bg-gray-300 mx-6"></div>
    
    {/* Right Column */}
    <div className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-10">
      {organizArr.slice(Math.ceil(organizArr.length / 2)).map((item, index) => (
        <div key={index} className="max-w-md w-full bg-white rounded-xl hover:bg-orange-400  md:hover:bg-orange-400 overflow-hidden shadow-lg p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <h1 className="text-black text-2xl md:text-3xl">{item.heading}</h1>
            <p className="text-gray-600 text-base md:text-lg mt-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  

  );
};


