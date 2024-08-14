import React from 'react'


type prop={
    data:{
        cont1:string
        cont2:string
        cont3:string
        
    }
}
export default function Commonbreadcrumb({data}:prop) {



  return (
    
    <section className="  w-full bg-gray-950 py-10 md:py-20 bg-cover">
    <div className="flex flex-col items-center text-center p-4 md:p-16">
      <h1 className="text-4xl md:text-6xl text-white mb-4">
        {data.cont1.split(' ').map((word, index) => (
          index === 2 ? <span key={index} className="text-orange-500">{word} </span> : word + ' '
        ))}
      </h1>
      <p className='text-base md:text-xl text-white max-w-md md:max-w-xl mx-4 mb-4'>
        {data.cont2}
      </p>
      <h1 className='text-gray-400 hover:text-orange-400 text-base md:text-lg'>
        {data.cont3}
      </h1>
    </div>
  </section>
  
    
  )
}
