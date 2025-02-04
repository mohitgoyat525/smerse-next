"use client";
import Image from "next/image";
import { ABOUTUS_LIST } from "@/utils/helper";
import CustomHeading from "./common/CustomHeading";

const AboutUs = () => {
    return (
        <div className="bg-[#0A0A2B] pt-[84px] relative">
            <Image src='/assets/images/svg/black-circle.svg' alt="black-circle" width={24} height={24} className="absolute top-[14px] left-0"/>
            <div className="max-w-[1141px] mx-auto">
        <div className="flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10 px-4">
                <div className="w-6/12 max-lg:w-full">
                    <div className="relative">
                            <CustomHeading textOne="About Us" textTwo="About Us"/>
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
                <Image src='/assets/images/webp/about-us-img.webp' width={621} height={478} alt="smerse" className="object-contain"/>
          </div>
                </div>
                </div>
      </div>
    );
}

export default AboutUs