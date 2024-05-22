"use client";

import { useState } from "react";
import TabBar from "../tabbar/TabBar";
import DisplayPane from "../tabbar/DisplayPane";

export default function Certificates() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col justify-start gap-5">
      <h1 className="text-white font-extrabold text-4xl">Certificates</h1>
      <div>
        <TabBar tab={tab} setTab={setTab} />
        <DisplayPane tab={tab} />
      </div>
    </div>
  );
}
