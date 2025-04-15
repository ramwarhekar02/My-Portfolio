import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed w-full p-6 md:p-10 z-50">
      <div className="flex max-w-[1400px] mx-auto justify-between items-center md:flex-row gap-y-6 md:gap-y-0">
        
        <div>
          <a href='/' className="text-3xl text-[#B7AB98] font-black">RW</a>
        </div>

        <div className="text-sm">
          <ul className="text-[#B7AB98] space-y-2 flex flex-col md:flex-row md:space-y-0 md:space-x-8 items-end md:items-center uppercase font-medium tracking-wide">
            <li>
              <a
                href="#about"
                className="relative inline-block transition-all duration-300 transform hover:translate-y-[-5px] hover:text-shadow-md"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative inline-block transition-all duration-300 transform hover:translate-y-[-5px] hover:text-shadow-md"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative inline-block transition-all duration-300 transform hover:translate-y-[-5px] hover:text-shadow-md"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
