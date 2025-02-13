import React from "react";

interface CustomHeadingProps {
  textOne: string;
  textTwo: string;
  myClassOne?: string;
  myClassTwo?: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({
  textOne,
  textTwo,
  myClassOne,
  myClassTwo,
}) => {
  return (
    <div className="relative">
      <h2
        className={`${myClassOne}  text-[48px] max-md:text-4xl max-md:leading-[43.2px] font-black text-white tracking-[6px] relative z-10 leading-[120%] max-md:tracking-[8px] max-md:top-[-2.5%] max-md:left-[3.5px]`}
      >
        {textOne}
      </h2>
      <span
        className={`${myClassTwo} absolute max-md:text-4xl max-md:leading-[43.2px] inset-0 text-[48px] leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] max-md:tracking-[8px] -translate-x-0.5 max-md:-translate-x-[3px] max-md:top-[-2.5%] max-md:left-[3.5px]`}
      >
        {textTwo}
      </span>
    </div>
  );
};

export default CustomHeading;
