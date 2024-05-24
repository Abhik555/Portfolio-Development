"use client";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IconContext } from "react-icons";


export default function FloatingBar({ icon, selected, setSelected }) {
  const icons = [
    <MdOutlineAccountCircle key={0} size={30} />,
    <GrCertificate key={1} size={30} />,
    <FaCode key={2} size={30} />,
    <IoMail key={3} size={30} />,
  ];


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
