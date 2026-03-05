import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="pb-5">
      <div className="logo flex items-center flex-col gap-5 justify-center  ">
        <h1 className="lg:text-[25vw] md:text-[25vw] lg:leading-[23vw] md:leading-[23vw] text-[27vw] leading-[27vw] font-[font5] uppercase">
          Cloth
        </h1>
      <div className="Handlers w-full">
        <div className="flex space-x-6 w-full justify-center  items-center">
         <ul className=" flex items-center justify-center lg:gap-30 md:gap-30 gap-20">
             <li className="hover:text-white transition-all transform hover:scale-110"
          >
            <Instagram size={40} strokeWidth={1.5} />
          </li>
          <li className="hover:text-white transition-all transform hover:scale-110"
          >
            <Facebook size={40} strokeWidth={1.5} />
          </li>
          <li className="hover:text-white transition-all transform hover:scale-110"
          >
            <Twitter size={40} strokeWidth={1.5} />
          </li>
         </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
