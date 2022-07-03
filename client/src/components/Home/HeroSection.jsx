import React from "react";

import classes from "../../assets/styles/components/hero.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${classes.heroBody} py-8 px-12 w-[90%] bg-black h-[85vh] rounded-xl ml-8 flex justify-between items-center`}
    >
      <div className={`${classes.heroText} text-white text-center flex flex-col w-1/2 min-h-[70vh] justify-start  gap-6 items-left`}>
          <h1 className="text-7xl text-left font-bold">
              Find Your Best Smart Real - Estate
          </h1>
          <button className="py-4 mt-4 bg-grey-blue hover:bg-bubble-gum-faded hover:shadow-lg shadow-white active:shadow-none transition-all w-8/12 rounded-md cursor-pointer">
              Search For Your Dream Home
          </button>
          <button className="py-4 bg-dark-blue hover:bg-bubble-gum-faded hover:shadow-lg shadow-white active:shadow-none transition-all w-7/12 rounded-md cursor-pointer">
              Register to our app
          </button>
      </div>
      <div className={`${classes.heroSide} w-5/12 h-[88vh] mt-28 rounded-md shadow-lg`}></div>
    </div>
  );
};

export default HeroSection;
