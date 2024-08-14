import { formimg, ngo3 } from '@/assets/Home'
import React from 'react'
import { useRouter } from 'next/router';

const skillArr=[
    {name:"First aid"},
    {name:"Teaching"},
    {name:"Finacial aid"},
    {name:"Childcare"},
    {name:"Human rights"},
    {name:"Other"},
]

export default function Contactdetails() {

  return (
    <section className='py-4 px-4 md:px-28'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 bg-orange-50 rounded-md ">
      
      <div className="flex flex-col  items-start p-6">
      
      <h1 className="text-2xl font-bold mb-6">Contact details</h1>
      <form >
        <div className="mb-4 ">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your name*'
            className="w-full px-3 py-2 border h-16 border-gray-300 rounded-md"
           
          />
          <h1 className='text-orange-500 mt-3 '>Please fill out this field.</h1>
        </div>
        <div className="mb-4">
          
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder='Phone number*'
            className="w-full px-3 py-2 h-16 border border-gray-300 rounded-md"
            
          />
          <h1 className='text-orange-500 mt-3'>Please fill out this field.</h1>
        </div>
        <div className="mb-4">
          
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email address*'
            className="w-full px-3 py-2 h-16 border border-gray-300 rounded-md"
            
          />
          <h1 className='text-orange-500 mt-3'>Please fill out this field.</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Skillset or Area of Interests
          </label>
          <div className=" flex flex-wrap gap-3">
            {skillArr.map((item) => (
              <div key={item.name} >
                <input
                  type="checkbox"
                  
                  name="skills"
                  
                  className="mr-2"
                 
                />
                <label  className="text-gray-700 ">
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
            placeholder='Anything else you would like us to know ?'
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="privacyPolicy"
              className="mr-2"
              
            />
            <span className="text-gray-700">I  understand and agree to the Privacy Policy</span>
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 w-full text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500"
          >
            Submit request
          </button>
        </div>
      </form>
    </div>
  
      
      
    
      <div className="flex  flex-row justify-center items-center">
        <img src={formimg.src} alt="Placeholder Image" className="w-full h-auto rounded-md" />
      </div>
      </div>
  
   
  </section>
  )
}
