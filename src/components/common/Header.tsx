"use client";
import { HEADER_LIST } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div
      className={`!mx-auto w-full fixed py-4 max-md:py-0 top-0 z-50 max-xl:px-4 transition-all duration-300 ${
        scrolled ? "bg-black" : "bg-black/50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between max-w-[1140px] bg-transparent">
        <a href="">
          <Image
            src="/assets/images/webp/page-logo.webp"
            width={68}
            height={68}
            alt="page-logo"
            className="object-cover max-md:max-w-10 max-md:py-[5px]"
          />
        </a>
        <div
          className={`flex gap-[55px] max-xl:gap-10 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-black max-lg:z-10 ${
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
            className="text-white hidden max-md:block p-[11px_23px_11px_25px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-xl font-extrabold leading-6 rounded-lg transition-all duration-300 h-[53px] hover:scale-110 min-w-[156px]"
          >
            Mint Now
          </button>
          <button
            onClick={closeHandler}
            className="text-white max-md:hidden p-[11px_23px_11px_25px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-xl font-extrabold leading-6 min-w-[156px] h-[53px] rounded-lg transition-all duration-300 hover:scale-110"
          >
            Mint Now
          </button>
        </div>
        <div className="flex items-center justify-center gap-10 lg:hidden">
          <button
            onClick={closeHandler}
            className="text-white max-md:hidden lg:hidden p-[11px_23px_11px_25px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-xl font-extrabold leading-6 min-w-[156px] h-[53px] rounded-lg transition-all duration-300 hover:scale-110"
          >
            Mint Now
          </button>
          <button
            onClick={handleClick}
            className="flex flex-col items-center justify-between relative z-20 overflow-hidden h-5 w-6 lg:hidden max-md:w-[14px] max-md:h-[11px]"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 bg-white rounded-lg ${
                open ? "translate-x-10" : ""
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
      </div>
    </div>
  );
};

export default Header;
