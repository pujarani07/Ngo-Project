import { ngo1,ngo2,ngo3 } from '@/assets/Home'
import React from 'react'

export default function Questionanswerpage() {
  return (
    <div className="bg-orange-50 p-4 md:p-8">
    <div className="text-center mb-8">
      <h1 className="text-xl md:text-2xl text-orange-400 mb-4">
        Your Questions Answered
      </h1>
      <p className="text-2xl md:text-4xl font-bold mb-2">
        Get Informed Now.
      </p>
      <p className="text-2xl md:text-4xl font-bold">
        Answers to Your Common Questions
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
  <div className="grid grid-cols-2  gap-5">
    <div className="flex flex-col gap-5">
      <img src={ngo1.src} alt="NGO 1" className="rounded-md w-full h-auto" />
      <img src={ngo2.src} alt="NGO 2" className="rounded-md w-full h-auto" />
    </div>
    <div className="flex flex-col gap-5">
      <img src={ngo3.src} alt="NGO 3" className="rounded-md w-full h-auto" />
    </div>
  </div>

  <div className="p-4 md:p-8">
    <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Frequently Asked Questions</h1>
    <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4">
      Can't find what you're looking for? Get in touch with our team and we will gladly help out.
    </p>
    <div className="mt-4 sm:mt-6 md:mt-8">
      <p className="bg-white p-3 font-bold text-base sm:text-lg">1. How can I donate?</p>
      <p className="mt-2 text-base sm:text-lg">
        You can donate securely online through our website or contact us for other options.
      </p>
      <p className="bg-white p-3 font-bold text-base sm:text-lg mt-4">2. How are funds utilized?</p>
      <p className="mt-2 text-base sm:text-lg">
        Funds are transparently allocated to specific projects, ensuring direct impact and accountability.
      </p>
      <p className="bg-white p-3 font-bold text-base sm:text-lg mt-4">3. Can I volunteer internationally?</p>
      <p className="mt-2 text-base sm:text-lg">
        Yes, we offer volunteer opportunities globally. Visit our volunteer page for more information.
      </p>
    </div>
  </div>
</div>

  </div>
  
  )
}
