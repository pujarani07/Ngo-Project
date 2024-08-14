import React from 'react'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { c1 } from '@/assets/Home';

const arr=[
    {title:"Healthcare access to communities"},
    {title:"Promote environmental sustainability"},
    {title:"Advocate for social justice and equality"}
]
export default function Ourmission() {
  return (
    <section className="  px-4 md:px-8 lg:px-28 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-11">
    <div className="flex justify-center items-center rounded-md bg-pink-50 p-4 md:p-8 lg:p-12">
      <img src={c1.src} alt="Placeholder Image" className="max-w-full h-auto rounded-md" />
    </div>
    <div className="flex flex-col justify-center items-start p-4 md:p-8 lg:p-12">
      <h1 className='text-orange-400 text-lg md:text-xl lg:text-2xl font-bold'>Our mission</h1>
      <h1 className='text-black text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-4 font-bold'>Empowering lives</h1>
      <p className="text-base md:text-lg lg:text-lg leading-loose mt-2 md:mt-4">
        Our mission is to empower individuals and families through comprehensive services, fostering resilience, dignity, and positive community impact for a brighter future.
      </p>
      <div className="mt-4 md:mt-5 lg:mt-6">
        <ul>
          {arr.map(({ title }) => (
            <li key={title} className="py-2 md:py-3 flex items-center">
              <span className="flex items-center gap-2 font-bold">
                <DoneOutlinedIcon className="fill-orange-500 size-5" />
                {title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}
