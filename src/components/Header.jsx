import { useState } from "react";
import logo from "/duhookLogo.png"
import { FaSistrix } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { IoRadio } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RiWindowsLine } from "react-icons/ri";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); 
  };

  return (
    <div className="w-full">
        <div className="flex bg-black text-white items-center px-5 justify-between  sm:h-20 border-b border-gray-600 h-16">
  
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-14 sm:w-20"/>
          </div>
          <div className="">
            <input type="text" className="rounded-full sm:w-72 sm:h-9 bg-slate-900 text-center text-lg text-gray-500 hidden sm:block" placeholder="Search"></input>
          </div>
          <div className="profile flex items-center justify-center w-44 rounded-full h-12 bg-slate-900">
            <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" className="w-12 cursor-pointer sm:-ml-3"></img>
            <div className="ml-0 ">
              <h1 className="text-sm font-medium">Kittie Cardos</h1>
              <h1 className="text-xs text-slate-400">Kittie Cardos</h1>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <FaSistrix className="text-sky-600 font-medium cursor-pointer h-6 sm:hidden "/>
            <FaAlignJustify className="text-sky-600 cursor-pointer h-6 sm:hidden"/>
            <IoRadio className="hidden sm:block w-8 h-6 text-sky-600 border-sky-600 border-2"/>
            <IoHome className="hidden sm:block w-8 h-6 text-sky-600 border-sky-600 border-2"/>
            <IoChatboxOutline className="hidden sm:block w-8 h-6 text-sky-600 border-sky-600 border-2"/>
            <IoNotifications className="hidden sm:block w-8 h-6 text-sky-600 border-sky-600 border-2"/>
            <FaPlus className="hidden sm:block w-8 h-6 text-sky-600 border-sky-600 border-2"/>
            <RiWindowsLine className="hidden sm:block w-8 h-6 text-sky-600 border-sky-600 border-2"/>



          </div>
        </div>
    </div>
  );
}

export default Header;
