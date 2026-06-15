"use client";
import Image from "next/image";
import CustomeButton from "./CustomeButton";

const Hero = () => {
  const handleScroll = () => {
    console.log('scroll')
    // const nextSection = document.getElementById("discover");
  }
  return (
    <div className="hero pt-[150px]">
      <div className="flex-1 pr-36 padding-x">
        <h1 className="hero__title">
          Find , book or rent a car -- quickly and easly!
        </h1>
        <p className="hero__subtitle">
          Effortlessly explore our fleet and find the perfect vehicle for your
          needs.
        </p>
        <CustomeButton title="explore cars"  
        containerStyels="bg-primary-blue capitalize rounded-2xl text-white mt-10" 
        handleClick={handleScroll}/> 
      </div>  
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill className="object-contain" alt="hero" />
        </div>
          <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
