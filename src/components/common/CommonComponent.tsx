import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { homeArr } from '@/util/home';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CommonComponent() {
    const router=useRouter();
  return (

<section className="container mx-auto px-4 py-8">
  <div>
    <div className="hidden md:flex justify-between items-center space-x-4">
      {homeArr.map((item) => (
        <button
          key={item.path}
          onClick={() => { router.push(`${item.path}`); }}
          className="whitespace-nowrap px-4 py-2 border-b-2 border-transparent hover:border-blue-500"
        >
          {item.title}
        </button>
      ))}
    </div>
    <hr className="border-gray-200 w-full" />
  </div>
  {homeArr.map((item, index) => (
    <div
      key={item.componentid}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-8`}
      id={item.componentid}
    >
      <div className="flex flex-col justify-center items-start p-4 md:p-11">
        <h1 className="text-orange-400 text-lg">{item.title}</h1>
        <h1 className="text-black text-3xl md:text-5xl mt-4">{item.heading}</h1>
        <p className="text-base md:text-lg leading-loose mt-4">
          {item.paragraph}
        </p>
        <button className="bg-orange-500 text-white hover:bg-gray-950 hover:text-black font-bold py-2 md:py-4 px-6 md:px-11 rounded mt-8">
          Donate <ArrowRightAltIcon />
        </button>
      </div>
      <div className="flex justify-center items-center p-4">
        <img src={item.image.src} alt="Placeholder Image" className="w-full h-auto md:h-full rounded-md" />
      </div>
    </div>
  ))}
</section>

  )
}
