"use client";
import { HEADER_LIST } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <div className="!max-w-[1355px] px-4 !mx-auto flex items-center justify-between py-5 w-full">
            <a href=""><Image src="/assets/images/webp/page-logo.webp" alt="logo" width={100} height={100} /></a>
      <div
        className={`flex gap-[29px] max-xl:gap-5 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-black max-lg:z-10 ${
          open ? "max-lg:!right-0" : ""
        }`}
      >
        <div className="flex max-lg:flex-col gap-5 items-center">
          {HEADER_LIST.map((item, i) => (
            <a
              key={i}
              onClick={closeHandler}
              href={item.link}
              className="text-white !whitespace-nowrap font-normal text-base leading-[19.2px] hover:text-blue-400 transition-all duration-300"
            >
              {item.title}
            </a>
          ))}
        </div>
        <button
          onClick={closeHandler}
          className="text-white hidden max-lg:block p-[11px_23px_11px_25px] bg-gradient-to-t from-[#952FFE] via-[#C641C6] to-[#FF676B] text-xl font-extrabold leading-6 tracking-[6%] rounded-lg transition-all duration-300 "
        >
          Mint Now
        </button>
      </div>
      <button
        onClick={closeHandler}
        className="text-white max-lg:hidden p-[11px_23px_11px_25px] bg-gradient-to-t from-[#952FFE] via-[#C641C6] to-[#FF676B] text-xl font-extrabold leading-6 tracking-[6%] rounded-lg transition-all duration-300 "
      >
        Mint Now
      </button>
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-between relative z-20 overflow-hidden h-5 w-6 lg:hidden"
      >
        <span
          className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
            open ? " translate-x-10" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg relative after:absolute after:top-0 after:left-0 after:w-6 after:h-0.5 after:bg-white after:rounded-lg ${
            open ? "after:rotate-90 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
            open ? " -translate-x-10" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Header;
