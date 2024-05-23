"use client";
import BarItem from "./BarItem";
import { useState } from "react";

import { MdOutlineAccountCircle } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IconContext } from "react-icons";

const icons = [
  <MdOutlineAccountCircle />,
  <GrCertificate />,
  <FaCode />,
  <IoMail />,
];

// ${selected === index ? 'bg-white text-black' : 'bg-transparent text-black' }

export default function FloatingBar({ icon, selected, setSelected }) {
  //const [selected , setSelected] = useState(0);
  const icons = [
    <MdOutlineAccountCircle size={30} />,
    <GrCertificate size={30} />,
    <FaCode size={30} />,
    <IoMail size={30} />,
  ];

  //fixed bottom-10 left-12 right-12 lg:bottom-auto lg:right-28 lg:left-auto lg:flex-col

  return (
    <div className="flex flex-row  mx-auto lg:mr-0 inset-x-0 lg:inset-y-0  w-full lg:w-auto justify-center lg:justify-end z-10">
      <div className="flex flex-row lg:flex-col  gap-4 justify-evenly h-auto w-fit lg:w-auto lg:h-fit p-3 bg-white bg-opacity-25 backdrop-blur-xl  rounded-full z-0">
        {icons.map((icon, index) => {
          if (selected === index) {
            return (
              <button
                key={index}
                className={
                  "w-12 h-12 rounded-full flex items-center justify-center bg-white opacity-100 shadow-md transition-colors duration-300 z-10"
                }
                onClick={() => setSelected(index)}
              >
                <IconContext.Provider value={{ fill: "black", color: "black" }}>
                  {icon}
                </IconContext.Provider>
              </button>
            );
          } else {
            return (
              <button
                key={index}
                className={
                  "w-12 h-12 rounded-full flex items-center justify-center bg-transparent fill-white transition-colors duration-300 z-10"
                }
                onClick={() => setSelected(index)}
              >
                <IconContext.Provider value={{ fill: "white", color: "white" }}>
                  {icon}
                </IconContext.Provider>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
