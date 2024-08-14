import React from 'react'
import {card} from "@/util/home/index"

export default function Card() {
  return (
  
    <div className="flex flex-wrap  p-4">
    {card.map((item, index) => (
      <div
        key={index}
        className="flex-1 min-w-[200px] max-w-xl border rounded-md shadow-md overflow-hidden"
      >
        <img
          src={item.image.src}
          alt={`Card ${index}`}
          className="w-full h-auto object-cover"
        />
      </div>
    ))}
  </div>
  
  
  )
}
