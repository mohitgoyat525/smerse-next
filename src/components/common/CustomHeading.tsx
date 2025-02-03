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
      <h1
        className={`${myClassOne}  text-[48px] max-md:text-4xl max-md:leading-[43.2px] font-black text-white tracking-[6px] relative z-10 leading-[120%] max-md:text-[40px]`}
      >
        {textOne}
      </h1>
      <span
        className={`${myClassTwo} absolute max-md:text-4xl max-md:leading-[43.2px] inset-0 text-[48px] leading-[120%] font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[-2.5%] -translate-x-[1px]`}
      >
        {textTwo}
      </span>
    </div>
  );
};

export default CustomHeading;
