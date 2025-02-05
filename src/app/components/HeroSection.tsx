import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
       <div>
          <div className="flex bg-[#FBEBB5] items-center flex-col md:flex-row px-6 md:px-16 py-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                Rocket Single <br /> Seater
              </h1>
              <div className="mt-6 inline-block border-b-2 border-black text-lg cursor-pointer">
                Shop Now
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image
                src="/Rocket single seater 1.png"
                height={500}
                width={600}
                className="max-w-full h-auto"
                alt="hero"
              />
            </div>
          </div>
       </div>
    );
};
  
export default HeroSection;
