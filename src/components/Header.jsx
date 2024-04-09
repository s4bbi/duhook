import { useState } from 'react'; // Import useState hook

import logo from "/duhookLogo.png"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); 
  };

  return (
    <div>
      <div className='flex bg-black text-white items-center justify-between px-5'>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16"/>
          <span className="font-rM">DUHook</span>
        </div>
        <div>
        </div>
        <div className='flex gap-4'>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
             {showSidebar ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>

        {showSidebar && (
          <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transform transition-transform ${showSidebar ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className="absolute top-0 right-0 h-screen w-64 bg-EventBG shadow-lg">
              <div className="flex justify-end p-4">
                <button onClick={toggleSidebar} className="text-white hover:text-gray-800 focus:outline-none">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <ul className="text-white">
                  <li className="mb-4 flex gap-3">
                    {/* Add your sidebar content here */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Header;
