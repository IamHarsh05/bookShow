import React from "react";
import Navbar from "../Components/Navbar/navbar";
import Shows from "../Components/Show/shows";
// import Subjects from "../Components/Subjects";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-200">
      {/* Side Bar */}
      <Navbar />
      <div className="flex w-screen py-16 md:py-2">
        <div className="w-screen overflow-y-scroll overflow-x-hidden">
          {/* Main Dashboard */}
          <Shows />
        </div>
      </div>
    </div>
  );
}
