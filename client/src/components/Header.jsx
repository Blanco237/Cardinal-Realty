import React, { useState } from "react";

import logo from '../assets/images/logo-metal.png'
import { FaBars } from 'react-icons/fa'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full h-20 px-6 md:px-14 py-1 bg-pink-blush flex justify-between items-center shadow-lg fixed top-0 left-0">
      <div className=" w-5/12 md:w-2/12 h-full object-contain grid place-items-center">
        <img alt="logo" className="w-8/12 object-contain" src={logo}/>
      </div>
      <div className={`flex gap-20 ${showMenu? 'absolute md:static top-16 md:top-0 left-0 md:left-[100%] flex-col md:flex-row px-6 py-3 shadow md:shadow-none items-center md:justify-end bg-pink-blush w-full animate-menuIn': 'absolute md:static top-16 md:top-0 left-[-999px] md:left-[100%] shadow md:shadow-none items-center md:items-end bg-pink-blush w-full flex-col md:flex-row animate-menuOut md:justify-end'}`}>
        <nav className="">
          <ul className="flex gap-8 items-center mt-[0.4rem] flex-col md:flex-row">
            {["Home", "About", "Contact", "3DViewer"].map((item, index) => {
              return <li key={index} className={`cursor-pointer hover:border-b-2 border-b-dark-blue m-0 transition-[border]`}>{item}</li>;
            })}
          </ul>
        </nav>
        <nav className=" gap-6 items-center flex ">
          <button className="hover:mt-[-0.3rem] hover:shadow-lg transition-all  px-4 py-1 active:shadow">Login</button>
          <button className="border border-grey-blue px-2 py-1 rounded-sm hover:bg-grey-blue hover:text-pink-blush transition-colors hover:shadow">Register</button>
        </nav>
      </div>
      <div className={`text-2xl text-dark-blue cursor-pointer md:hidden ${showMenu? 'rotate-90 animate-rotate' : 'rotate-0 animate-rotateReverse'}`} onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
        </div>
    </header>
  );
};

export default Header;
