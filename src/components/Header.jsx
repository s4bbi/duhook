import logo from "../../public/duhookLogo.png"

const Header = () => {
  return (
    <div className="flex bg-black text-white items-center font-[poppins]">
      <img src={logo} className="w-16" alt="" />
      <span>DUHook</span>
    </div>
  )
}

export default Header