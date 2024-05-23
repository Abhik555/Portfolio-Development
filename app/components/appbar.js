import { useState } from "react";
import Button from "./button";

export default function AppBar() {
  return (
    <div className="flex flex-col xl:flex-row justify-between object-center place-items-center mr-5 ml-5 pl-24 pr-24 pt-5 pb-5 w-full bg-transparent backdrop-blur-sm">
      <h1 className="font-bold text-3xl ">{"{ Abhik Ghosh }"}</h1>
      <div>
        <a className="font-bold text-3xl" href="404">Blog</a>
      </div>
    </div>
  );
}
