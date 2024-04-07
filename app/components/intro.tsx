import React from "react";

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
        <div className="h-[27.94px] w-[24.12px] ml-8 flex">
          <div className="flex flex-col">
            <p className=" text-white pt-1 flex items-center justify-center font-bold text-[6.96px] w-[24.12px] h-[10.06px] bg-[#252525] rounded-t-md">
              APR
            </p>
            <p className=" flex justify-center items-center w-[24.04px] h-[17.88px] border-2 border-[#252525] rounded-b-md">
              <img src="/images/date-19.svg" alt="logo" />
            </p>
          </div>
          <div className="text-white ml-4">
            <h2 className="">Baldev Raj Mittal Unipolis</h2>
            <h3>Lovely Professional University, Punjab</h3>
          </div>git
          {/* <div></div> */}
        </div>
        <div></div>
        <div></div>
      </div>
      <aside className="bg-gray-100 w-[30%] h-[30rem]"></aside>
    </section>
  );
};

export default Intro;
