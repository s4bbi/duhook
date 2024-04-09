import logo from "../../public/duhookLogo.png"
import { FaSistrix } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full">
      
        <div className="flex bg-black text-white items-center px-5 justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-16"/>
            <span className="font-rM cursor-pointer">DuHook</span>
          </div>
          <div>
            <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" className="sm:w-24 w-14 cursor-pointer"></img>
          </div>
          <div className="flex gap-5">
            <FaSistrix className="text-sky-500 font-medium cursor-pointer"/>
            <FaAlignJustify className="text-sky-500 cursor-pointer"/>
          </div>
        </div>
    </div>
  )
}

export default Header