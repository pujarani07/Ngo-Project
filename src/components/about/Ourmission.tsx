import { c3 } from '@/assets/Home'

export default function Ourmission() {
  return (
    <section className=' py-4 px-4 md:px-28'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-orange-100 rounded-md mx-auto max-w-screen-2xl ">
      <div className="flex flex-col justify-center items-start p-4 md:p-8 lg:p-20">
        <h1 className='text-orange-400 text-lg font-bold'>Our mission</h1>
        <h1 className='text-black text-3xl md:text-5xl mt-4 font-bold'>About & history</h1>
        <p className="text-base md:text-lg leading-loose mt-4">
          We collaborate with a network of organizations, businesses, and community leaders to expand resources.
        </p>
        <div className="bg-gray-100 flex mt-6 h-11 md:h-20space-x-2 md:space-x-4 w-full rounded-md justify-between items-center">
          <button className="hover:bg-orange-500 text-black font-bold py-2 px-3 md:py-2 md:px-8 rounded-md">
            Business
          </button>
          <button className="hover:bg-orange-500 text-black font-bold py-2 px-3 md:py-2 md:px-8 rounded-md">
            Values
          </button>
          <button className="hover:bg-orange-500 text-black font-bold py-2 px-3 md:py-2 md:px-8 rounded-md">
            People
          </button>
        </div>
        <p className="text-base md:text-lg leading-loose mt-4">
          We aim to simplify complex processes, enhance operational efficiency, and drive growth through our innovative software and services.
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        <img
          src={c3.src}
          className="w-full h-auto object-cover rounded-md"
          alt="About and History"
        />
      </div>
    </div>
  </section>
 
     
     
  
  );
}