"use client";
import Image from "next/image";
import { ABOUTUS_LIST } from "@/utils/helper";

const AboutUs = () => {
    return (
        <div className="bg-[#0A0A2B]">
            <div className="max-w-[1141px] mx-auto">
        <div className="flex items-center max-xl:flex-wrap">
                <div className="w-6/12 max-lg:w-full">
                    <div className="relative">
                        <h2 className="text-5xl leading-[57.6px] font-[900] text-white max-xl:text-4xl max-lg:text-3xl ">About Us</h2>
                        <div className="pt-[25px]">
                            {ABOUTUS_LIST.map((obj, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-5 max-xl:my-4">
                                        <Image src={obj.icon} width={29} height={29} alt="icons" className="w-full max-w-[39px]"/>
                                        <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none">{obj.description}</p>
                                    </div>
                                    </div>
                            ))}
                        </div>
                        </div>
          </div>
        <div className="w-6/12 max-lg:w-full">
                        
          </div>
                </div>
                </div>
      </div>
    );
}

export default AboutUs