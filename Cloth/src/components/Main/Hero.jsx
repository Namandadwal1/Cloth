import React from "react";

function Hero() {
  return (
    <div className="pt-10 h-screen flex items-center justify-center">
      <div>
        <div className="heading">
          <h1 className="text-[19vw] leading-[18vw] font-[font5] uppercase">
            Let's Go
          </h1>
        </div>
        <div className="button flex items-center justify-center pt-14">
          <button className="bg-white text-zinc-900  font-[font5] uppercase px-15 cursor-pointer  py-2 rounded-full text-2xl">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
