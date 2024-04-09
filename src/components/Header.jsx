import logo from "../../public/duhookLogo.png"
import { FaSistrix } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div>
        <div className="flex bg-black text-white items-center font-[poppins] px-5 gap-x-24 hustify-between">
          <div className="flex ">
          <img src={logo} alt="Logo" className="w-16"/>
          <span className="font-rM font-bold pt-5">DuHook</span>
          </div>
          <img src="https://play-lh.googleusercontent.com/L3JSdLbbJF2WSYm1DGDeiQSId1ftJKRrVX-Ne2cSjdzAzTLlHcuNW1LWKiWM8ttZbPc" className="sm:w-24 w-14 "></img>
          
          <div className="flex ">
          <FaSistrix className="text-sky-500 w-20 h-6 font-medium"/>
          <FaAlignJustify className="text-sky-500 w-12 h-6"/>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header