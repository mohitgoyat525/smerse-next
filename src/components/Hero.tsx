import React from 'react'
import Header from '../components/common/Header'
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-hero-bg-img max-xl:bg-hero-bg-img-xl max-md:bg-hero-bg-img-md relative">
      <Image src='/assets/images/webp/hero-top-shadow.webp' alt='shadow' width={164} height={164} className='object-cover absolute top-0 left-0'/>
      <Image src='/assets/images/webp/hero-bottom-shadow.webp' alt='shadow' width={164} height={164} className='object-cover absolute bottom-0 right-0'/>
      <Header />
      <div className="container px-4 mx-auto">
        <Image
          src="/assets/images/webp/hero-smerse-logo.webp"
          width={404}
          height={241}
          alt="logo"
          className="object-cover mx-auto mt-[52px] max-lg:mt-[79px] max-sm:mt-[117px] pointer-events-none max-xl:max-w-[388px] max-md:max-w-[256px]"
        />
        <div className="relative ">
          <h1 className="pt-8 text-8xl font-black text-white tracking-[6px] text-center relative z-10 leading-custom-md max-md:text-[40px] max-md:pt-[108px]">
            SMERSE
          </h1>
          <span className="absolute inset-0 text-8xl max-md:text-[40px] text-center leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[70%]">
            SMERSE
          </span>
        </div>
        <p className="font-semibold text-white uppercase leading-[54px] tracking-[6%] text-center text-4xl max-w-[637px] mx-auto max-md:text-xl">
          FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
        </p>
        <div className=" pt-[44px] pb-[55px]">
          <button className="min-w-[172px] h-[56px] border font-extrabold text-2xl leading-6 border-solid border-transparent rounded-lg text-white btn-garident mx-auto flex items-center justify-center">
            Get Started
          </button>
        </div>
      </div>
      <div className="btn-garident h-10"></div>
    </div>
  );
}

export default Hero