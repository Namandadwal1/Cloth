import React, { useEffect, useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="relative">
      <nav className="  fixed w-full">
        <ul className="lg:flex md:flex hidden items-center justify-between px-5 font-[font6] text-xl py-2">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Register</li>
          <div className="rendering hidden">
            <ul className="flex gap-5">
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Logout</li>
            </ul>
          </div>
        </ul>
      <div onClick={()=>{
        setMenu((prev)=>!prev)
      }} className="menu flex sm:flex md:hidden lg:hidden items-center justify-between py-2 px-5">
        <h1 className="font-[font5] text-4xl">Cloth</h1>
        <div className="flex flex-col gap-1">
          <div className="h-1 w-8 bg-white rounded-full"></div>
          <div className="h-1 w-8 bg-white rounded-full"></div>
        </div>
      </div>
      {menu&&(
        <div className=" z-50 absolute h-[95vh]  w-full bg-black">
      <ul className="font-[font6] text-[10vw] flex flex-col items-center justify-center h-full gap-10">
        <li>Home</li>
        <li>Shop</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
      </div>
      )}
      </nav>
    </div>
  );
}

export default Navbar;
