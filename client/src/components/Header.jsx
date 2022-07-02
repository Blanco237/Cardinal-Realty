import React from "react";

import logo from '../assets/images/logo-metal.png'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="w-full h-20 px-14 py-1 bg-pink-blush flex justify-between items-center shadow-lg fixed top-0 left-0">
      <div className=" w-2/12 h-full object-contain grid place-items-center">
        <img alt="logo" className="w-8/12 object-contain" src={logo}/>
      </div>
      <div className="flex gap-20">
        <nav>
          <ul className="flex gap-8 items-center mt-[0.4rem]">
            {["Home", "About", "Contact", "3DViewer"].map((item, index) => {
              return <li key={index} className={`cursor-pointer hover:border-b-2 border-b-dark-blue m-0 transition-[border]`}>{item}</li>;
            })}
          </ul>
        </nav>
        <nav className="flex gap-6 items-center">
          <button className="hover:mt-[-0.3rem] hover:shadow-lg transition-all  px-4 py-1">Login</button>
          <button className="border border-grey-blue px-2 py-1 rounded-sm hover:bg-grey-blue hover:text-pink-blush transition-colors hover:shadow">Register</button>
        </nav>
        <div>
            <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
