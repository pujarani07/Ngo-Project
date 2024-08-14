import React from 'react'
import {image,bg,image2,image3,image4} from "@/assets/Home/index"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function Slide1() {
  return (
    <div className="bg-gray-950 w-full h-auto md:h-screen flex flex-col items-center justify-center px-2">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-24">
    <div className="shadow-md rounded-lg flex flex-col justify-center items-center p-8">
      <p className="text-3xl md:text-6xl text-white text-center md:text-left">
        Empower change lives today
      </p>
      <p className="text-white text-base md:text-lg mt-4 md:mt-8 text-center md:text-left">
        Shape a brighter future and build a better world with our impactful NGO initiatives.
      </p>
      <button className="bg-orange-500 hover:bg-white text-white hover:text-black font-bold py-2 md:py-4 px-6 md:px-11 rounded mt-4 md:mt-8">
        Donate
      </button>
      <div className=" hidden md:flex mt-4 ">
        <ul className="flex flex-col md:flex-row gap-2 md:gap-5 text-white">
          <li className="flex items-center"><CheckCircleOutlineOutlinedIcon className="mr-1"/>Education</li>
          <li className="flex items-center"><CheckCircleOutlineOutlinedIcon className="mr-1"/>Healthcare</li>
          <li className="flex items-center"><CheckCircleOutlineOutlinedIcon className="mr-1"/>Clean water</li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 md:gap-5">
      <div className="flex flex-col gap-2 md:gap-8">
        <img src={image.src} alt="" className="rounded-md" />
        <img src={image4.src} alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col gap-2 md:gap-8">
        <img src={image2.src} alt="" className="rounded-md" />
        <img src={image3.src} alt="" className="rounded-md" />
      </div>
    </div>
  </div>
</div>

   
  )
}
