import { getArr } from '@/util/home';
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

type prop={
  data1:{
      cont1:string
      cont2:string
      cont3:string
      cont4:string
      
      
  }
}
export default function GetInvolved({data1}:prop) {
  return (
    <div className="main-container flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
  <div className="w-full md:w-1/2 p-4">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl lg:text-xl text-orange-400 mb-4">
        Get Involved
      </h1>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>
        {data1.cont1}
      </h1>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>
       {data1.cont2}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-3 text-center">
        {data1.cont3}
      </p>
    </div>
    <div className='flex justify-center items-center'>
      <button className="bg-orange-500 text-white hover:bg-gray-950 font-bold py-2 px-6 md:py-4 md:px-11 rounded mt-4 md:mt-8 flex items-center">
       {data1.cont4}<ArrowRightAltIcon className="ml-2" />
      </button>
    </div>
  </div>
</div>

  )
}
