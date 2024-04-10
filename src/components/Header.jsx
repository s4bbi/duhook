import { useState } from "react";
import logo from "/duhookLogo.png"
import { FaSistrix } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); 
  };

  return (
    <div className="w-full">
        <div className="flex bg-black text-white items-center px-5 justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-14"/>
          </div>
          <div className="flex items-center justify-center">
            <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" className="w-12 cursor-pointer"></img>
          </div>
          <div className="flex gap-5 items-center">
            <FaSistrix className="text-sky-500 font-medium cursor-pointer h-10"/>
            <FaAlignJustify className="text-sky-500 cursor-pointer h-10"/>
          </div>
        </div>
    </div>
  );
}

export default Header;
