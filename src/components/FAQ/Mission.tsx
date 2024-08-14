import React, { useState } from "react";
import { Collapse } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {  missionArr } from "@/util/home";
import Programs from "./Program";
import Financial from "./Financial";

export default function Mission() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("mission");

  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(null); // Close all collapses when switching sections
  };

  return (
    <section className="bg-white justify-center py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Buttons Section */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <button
              className={`bg-white text-blue-900 text-2xl py-3 px-6 rounded-md underline-offset-1 hover:underline ${
                activeSection === "mission" ? "hover:text-orange-500" : ""
              }`}
              onClick={() => handleButtonClick("mission")}
            >
              Mission and Projects
            </button>
            <button
              className={`bg-white text-blue-900 text-2xl py-3 px-6 rounded-md underline-offset-1 hover:underline ${
                activeSection === "programs" ? "hover:text-orange-500" : ""
              }`}
              onClick={() => handleButtonClick("programs")}
            >
              Programs and Services
            </button>
            <button
              className={`bg-white text-blue-900 text-2xl py-3 px-6 rounded-md underline-offset-1 hover:underline ${
                activeSection === "accountability" ? "hover:text-orange-500" : ""
              }`}
              onClick={() => handleButtonClick("accountability")}
            >
              Accountability
            </button>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3">
            {activeSection === "mission" && (
              <div className="text-start mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 capitalize">
                  Mission and Projects:
                </h1>
                <p className="text-lg md:text-xl text-gray-800 font-sans py-3">
                  Learn about our NGO’s mission, projects, volunteer opportunities, donation options, ongoing initiatives, and ways to stay connected.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-4">
              {activeSection === "mission" &&
                missionArr.map((item, index) => (
                  <div key={item.id} className="bg-white rounded-md shadow-md">
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
              {/* Conditionally render components based on activeSection */}
              {activeSection === "programs" && <Programs />}
              {activeSection === "accountability" && <Financial />}
            </div>
            <Programs />
            <Financial />
          </div>
        </div>
      </div>
    </section>
  );
}