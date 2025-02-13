import React from 'react'
import CustomHeading from './common/CustomHeading'
import { PROJECTS_LIST } from '@/utils/helper';
import Image from 'next/image';

const TheProjects = () => {
  return (
    <div className="max-xl:px-4 pt-[130px] max-lg:pt-[140px] max-md:pt-[67px] max-w-[1140px] mx-auto">
      <div className="flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10">
        <div className="w-6/12 max-lg:w-full">
          <CustomHeading textOne="The Projects" textTwo="The Projects" />
          <div className="pt-[25px]">
            {PROJECTS_LIST.map((obj, i) => (
              <div key={i}>
                <div className="flex gap-5 max-xl:my-4">
                  <Image
                    src={obj.icon}
                    width={29}
                    height={29}
                    alt="icons"
                    className="w-full max-w-[39px] h-full pointer-events-none mt-2 max-md:mt-0"
                  />
                  <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none pt-2 max-md:pt-0">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-6/12 max-lg:w-full">
          <Image
            src="/assets/images/webp/project-img.webp"
            alt="project-img"
            width={471}
            height={626}
            className="object-cover pointer-events-none max-lg:mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default TheProjects