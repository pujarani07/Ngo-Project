import React, { useState } from "react";
import { Collapse } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { programsArr } from "@/util/home";

export default function Program() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-start mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 capitalize">
            Programs and Services:
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-sans py-3">
            Explore the diverse programs, services, educational opportunities,
            community support, events, and advocacy initiatives offered by our
            NGO.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {programsArr.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-md shadow-md overflow-hidden"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleClick(index)}
              >
                <h2 className="font-semibold text-blue-950 text-lg md:text-xl">
                  {item.question}
                </h2>
                <AddCircleOutlineRoundedIcon
                  className={`transform transition-transform ${
                    isOpen === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <Collapse in={isOpen === index} timeout="auto" unmountOnExit>
                <div className="p-4">
                  <p className="text-blue-950">{item.answer}</p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}