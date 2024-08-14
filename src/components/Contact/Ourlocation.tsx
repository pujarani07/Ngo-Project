import React from 'react'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { c1 } from '@/assets/Home';

export default function Ourlocation() {
  return (
    <main className="main-container px-4 py-8 md:px-8 lg:px-28">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
      <div className="flex justify-center items-center rounded-md">
      <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7483.9994037617025!2d85.80990869154779!3d20.300279474691582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c55970eb61%3A0x81f12808cc25b847!2sJayadev%20Vihar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1721987819638!5m2!1sen!2sin"} width="600" height="450"   loading="lazy" ></iframe>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className='text-orange-400 text-lg font-bold'>Our location</h1>
        <h1 className='text-black text-2xl md:text-3xl lg:text-5xl mt-4 font-bold'>Love to hear from you. Let's connect</h1>
        <div className='mt-4 space-y-4'>
          <div>
            <h1 className='font-bold'>Address:</h1>
            <p>15 Washington Square<br/>New York, NY 10075, USA</p>
          </div>
          <div>
            <h1 className='font-bold'>Working hours:</h1>
            <p>Monday - Friday: 8AM - 5PM</p>
          </div>
          <div>
            <h1 className='font-bold'>Contact:</h1>
            <p>Email: hello@company.com<br/>Phone: +1 (215) 555-1122</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  
  
  )
}
