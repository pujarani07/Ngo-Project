import React from 'react'
import { navArr } from '@/util/home';
import { useRouter } from "next/router";
import Link from 'next/link'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { logo } from '@/assets/Home';
import { useState } from 'react';
import Getintouch from '@/components/getintouch/Sidebar';

export default function Header({setOpen, open}:any) {

    const router = useRouter();
  const currentPath = router.pathname;
  

  const navigateToVolunteer = () => {
    router.push('/volunteer');
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (

<section className=" bg-gray-200 shadow-md h-20 md:h-16 text-gray-900 p-3 ">
  <div className="container flex flex-row justify-between items-center gap-4 md:gap-10">
    <div className="text-xl font-bold flex  md:px-14 ">
      <Link href="/">
        <img src={logo.src} alt="Logo" className=" w-full h-10" />
      </Link>
    </div> 
    <nav className="hidden md:flex justify-between items-start gap-7">
      {navArr.map((item) => (
        <span
          className="w-fit h-full p-2 cursor-pointer group relative z-50"
          key={item.id}
          onClick={() => { router.push(`${item.path}`); }}
        >
          <h2 className="capitalize text-lg text-gray-600 hover:text-orange-500">{item.title}</h2>
        </span>
      ))}
      <SearchOutlinedIcon className="size-8" />
      <div className="flex gap-2">
        <button className="bg-[#FDF7F4] hover:bg-blue-950 text-[#FF7700] hover:text-white  px-4 py-2 md:py-3  font-bold rounded" onClick={navigateToVolunteer}>
          Volunteer
        </button>
        <button onClickCapture={()=>{setOpen(!open)}} className="bg-[#FF7700] z-50 hover:bg-blue-950 text-white px-4 py-2 md:py-3  font-bold rounded" onClick={toggleSidebar}>
          Get in touch
        </button>
      </div>
      </nav>
       <div className="flex md:hidden justify-between items-center w-full  ">
      <SearchOutlinedIcon className="size-8 " />
      <button className="bg-orange-500 hover:bg-white text-white px-4 py-2 hover:text-black font-bold rounded" onClick={navigateToVolunteer}>
        Volunteer
      </button>
      <button  onClickCapture={()=>{setOpen(!open)}} className="bg-orange-500 hover:bg-white text-white px-4 py-2 hover:text-black font-bold rounded" onClick={toggleSidebar}>
        Get in touch
      </button>
      
    </div>
    
   
  </div>
</section>


)

}
