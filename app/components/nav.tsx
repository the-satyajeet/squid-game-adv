"use client";

import { useState } from "react";
// import { X } from "lucide-react";
import MainButton from "./MainButton";

function Nav() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block fade-in zoom-in bg-black p-4">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div>
            <img src="/images/lot-white-logo.png" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[40px] text-[16px] items-center select-none h-[6.5rem] border-white bg-gray-700 bg-opacity-80 shadow-lg shadow-black/[0.03rem] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[32rem] sm:rounded-full p-5 w-[22rem]">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
            >
              Home
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
            >
              Events
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
            >
              Webinars
            </p>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
            >
              About Us
            </p>

            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
            >
              Contact
            </p>
            {/* Add more links here */}
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-white`}
            >
              Login
            </p>
            <MainButton text="Sign up" classes="shadow-none" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo-ico.png" alt="logo" className="w-[1rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Home
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Events
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Webinars
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                About Us
              </p>

              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Contact
              </p>

              <div className="flex flex-col gap-[40px] select-none">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  Login
                </p>
                <MainButton text="Sign up" classes="shadow-none" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Nav;


