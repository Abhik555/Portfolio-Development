'use client';
import AppBar from "./components/appbar";
import FloatingBar from "./components/FloatingBar/floatingbar";
import {useState} from "react";

import { MdOutlineAccountCircle } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Hero from "./components/items/hero";
import Certificates from "./components/items/certificates";
import Projects from "./components/items/projects";
import Contact from "./components/items/contact";

const icons = [<MdOutlineAccountCircle /> ,<GrCertificate/> , <FaCode /> , <IoMail />]

export default function Home() {

  const [tab , setTab] = useState(0);

  function renderSwitch(index){
    switch(index){
      case 0:
        return <Hero />
        break;
      case 1:
        return <Certificates />
        break;
      case 2:
        return <Projects />
        break;
      case 3:
        return <Contact />
        break;
      default:
        return <Hero />
        break;
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal justify-items-center mb-96 pt-5 pl-3 pr-3">
      <AppBar />
      <div className="flex flex-col justify-evenly gap-5 lg:flex-row lg:justify-between w-full p-52 pr-14">
        {renderSwitch(tab)}
        <FloatingBar icons={icons} selected={tab} setSelected={setTab}/>
      </div>
    </main>
  );
}
