import logo from "../../public/duhookLogo.png"

const Header = () => {
  return (
    <div>
      <div>
        <div className="flex bg-black text-white items-center font-[poppins] px-5">
          <img src={logo} alt="Logo" className="w-20"/>
          <span className="font-rM">DUHook</span>
        </div>
      </div>
    </div>
  )
}

export default Header