import React from "react";
import CustomHeading from "./common/CustomHeading";
import { VISION_LIST } from "@/utils/helper";

const Visions = () => {
  return (
    <div className="max-lg:px-4 pt-[78px]">
      <div className="flex items-center justify-center">
        <CustomHeading textOne="THE VISION" textTwo="THE VISION" />
      </div>
      <div className="flex items-center justify-center gap-5 max-md:gap-10 flex-wrap mt-[90px] max-md:mt-10 max-xl:justify-start max-md:justify-center">
        {VISION_LIST.map((obj, i) => (
          <div
            key={i}
            className="h-[413px] w-full max-w-[367px] max-md:max-w-[343px] relative group"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mx-auto number-box-bg size-24 rounded-full p-[1px]">
              <div className="bg-[#161636] w-full h-full flex items-center justify-center rounded-full group-hover:bg-gradient-to-b from-[#952FFE] via-[#C641C6] to-[#FF676B] transition-all ease-linear duration-300">
                <CustomHeading
                  textOne={obj.number}
                  textTwo={obj.number}
                  myClassOne="!text-4xl max-lg:!text-5xl max-md:!text-4xl"
                  myClassTwo="!text-4xl max-lg:!text-5xl max-md:!text-4xl"
                />
              </div>
            </div>
            <div className="number-box-bg h-[365px] flex items-center justify-center p-[1px] rounded-xl">
              <div className="bg-[#222240] h-full w-full rounded-xl transition-all ease-linear duration-300 hover:bg-gradient-to-b from-[#952FFE] via-[#C641C6] to-[#FF676B]">
                <p className="text-base text-white   font-normal text-center pt-[90px] max-w-[312px] mx-auto">
                  {obj.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visions;
