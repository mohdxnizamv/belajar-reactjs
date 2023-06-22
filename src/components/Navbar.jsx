import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {nav ? (
        <div className="fixed w-full h-screen flex flex-col justify-center items-center z-20">
          <div className="grid grid-cols-1 gap-y-7 pt-3 justify-center items-center">
            <a href="#main" className="btn3">
              <AiOutlineHome size={20} />
              <div className="pl-1">Home</div>
            </a>

            <a href="#main" className="btn3">
              <AiOutlineHome size={20} />
              <div className="pl-1">Work</div>
            </a>

            <a href="#main" className="btn3">
              <AiOutlineHome size={20} />
              <div className="pl-1">Projects</div>
            </a>

            <a href="#main" className="btn3">
              <AiOutlineHome size={20} />
              <div className="pl-1">Resume</div>
            </a>

            <a href="#main" className="btn3">
              <AiOutlineHome size={20} />
              <div className="pl-1">Contact</div>
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
