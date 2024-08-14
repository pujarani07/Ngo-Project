import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import {flogo, logo} from "@/assets/Home/index"
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerArr1, footerArr2 } from "../util/home/index";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="bg-gray-900 w-full px-2 py-4 md:py-12 md:px-0">
    <div className="container mx-auto p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Column 1 */}
      <div className="px-4">
        <img src={logo.src} className="h-30 w-52" alt="Logo" />
        <p className="text-white font-medium mt-7 leading-relaxed">
          You can help us to save lives during a disaster, get clean water running in the most remote areas, and much more.
        </p>
        <div className="flex flex-row mt-6 gap-5">
          <TwitterIcon className="hover:fill-orange-500 rounded-full bg-white" />
          <FacebookIcon className="hover:fill-orange-500 rounded-full bg-white" />
          <PinterestIcon className="hover:fill-orange-500 rounded-full bg-white" />
          <InstagramIcon className="hover:fill-orange-500 rounded-full bg-white" />
        </div>
      </div>
  
      {/* Column 2 */}
      <div className="text-white ">
        <p className="text-2xl mb-3">FEATURES</p>
        <div className="flex flex-col space-y-3 text-lg">
          {footerArr1.map((item) => (
            <Link key={item.id} href={item.path}>
              <p className="text-gray-500 hover:text-yellow-300">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
  
      {/* Column 3 */}
      <div className="text-white ">
        <p className="text-2xl mb-3">RESOURCES</p>
        <div className="flex flex-col space-y-3 text-lg">
          {footerArr2.map((item) => (
            <Link key={item.id} href={item.path}>
              <p className="text-gray-500 hover:text-yellow-300">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
  
      {/* Column 4 */}
      <div className="flex flex-col ">
          <div className="text-white">
            <p className="text-2xl">STAY IN TOUCH</p>
            <div className="flex flex-col sm:flex-row mt-3 gap-3">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="flex-grow rounded justify-center border items-center bg-blue-950 text-white h-14 px-4"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-white text-black font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-white mt-5">
            <p className="text-gray-500 hover:text-orange-500">1-800-CHARITY</p>
            <p className="text-gray-500 hover:text-orange-500">support@amitycharity.org</p>
          </div>
        </div>
    </div>
  </section>
  
  )
}
