"use client";

import { useState } from "react";
import TabBar from "../tabbar/TabBar";
import DisplayPane from "../tabbar/DisplayPane";

export default function Certificates() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-center lg:justify-start items-start w-full inset-0">
        <h1 className="flex text-white font-extrabold justify-center text-4xl text-nowrap">
          Skills & Certificates
        </h1>
      </div>
      <div className="flex flex-col justify-center lg:justify-start gap-5">
        <div>
          <TabBar tab={tab} setTab={setTab} />
          <DisplayPane tab={tab} />
        </div>
      </div>
    </div>
  );
}
