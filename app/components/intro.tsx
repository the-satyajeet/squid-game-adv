import React from "react";
import Apr19 from "./apr19";
import GreyCapsule from "./greyCapsule";
import BlackCapsule from "./blackCapsule";
import BlackCapsule2 from "./blackCapsule2";

const Intro = () => {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center bg-black p-8 pt-1">
      <div className=" w-[60%] h-[30rem]">
        <div className="w-[8rem] bg-white rounded-full h-[2rem] flex items-center justify-center gap-2">
          <div>
            <img src="/images/sm-logo.svg" alt="logo" />
          </div>
          <p className="text-primary font-bold">LOT Event</p>
        </div>
        <div className="text-white flex flex-col gap-0">
          <h1 className="text-[6rem] font-bold">Dare To Play 2024</h1>
          <h2 className="text-[4rem] font-normal">Theme: Squid Game</h2>
        </div>
        <div>
        <div className="ml-8 flex flex-row items-center">
        <Apr19></Apr19>
          <div className="text-white ml-4 flex flex-col ">
            <p className="font-bold text-[16px]"    >Baldev Raj Mittal Unipolis</p>
            <p className="font-normal text-[12px]">
              Lovely Professional University, Punjab
            </p>
          </div>
        </div>
        <div className="flex justify-evenly mt-6 ml-8 gap-4">
            <GreyCapsule></GreyCapsule>
            <BlackCapsule></BlackCapsule>
            <BlackCapsule2></BlackCapsule2>
        </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <aside className="bg-gray-100 w-[30%] h-[30rem]"></aside>
    </section>
  );
};

export default Intro;
