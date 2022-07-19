import React, { useState } from "react";
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo-metal.png'
import { FaBars } from 'react-icons/fa'
import { ROUTES } from "../Router/routes";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full h-20 px-6 md:px-14 py-1 bg-pink-blush flex justify-between items-center  fixed top-0 left-0 z-20">
      <div className=" w-5/12 md:w-2/12 h-full object-contain grid place-items-center">
        <img alt="logo" className="w-8/12 object-contain" src={logo}/>
      </div>
      <div className={`flex gap-20 ${showMenu? 'absolute md:static top-16 md:top-0 left-0 md:left-[100%] flex-col md:flex-row px-6 py-3 shadow md:shadow-none items-center md:justify-end bg-pink-blush w-full animate-menuIn': 'absolute md:static top-16 md:top-0 left-[-999px] md:left-[100%] shadow md:shadow-none items-center md:items-end bg-pink-blush w-full flex-col md:flex-row animate-menuOut md:justify-end'}`}>
        <nav className="">
          <ul className="flex gap-8 items-center mt-[0.4rem] flex-col md:flex-row">
            {[{title: "Home",link: ROUTES.HOME}, {title:"About",link:ROUTES.ABOUT}, {title:"Contact",link:ROUTES.CONTACT}, {title:"3DViewer",link:ROUTES.VIEW}].map((item, index) => {
              return <li key={index} className={`cursor-pointer border-b-2 border-b-[transparent] hover:border-b-2 hover:border-b-dark-blue m-0 transition-[border]`}><Link to={item.link} className='text-inherit'>{item.title}</Link></li>;
            })}
          </ul>
        </nav>
        <nav className=" gap-6 items-center flex ">
          <Link to={ROUTES.LOGIN}><button className="hover:mt-[-0.3rem] hover:shadow-lg transition-all  px-4 py-1 active:shadow rounded-sm">Login</button></Link>
          <Link to={ROUTES.REGISTER}><button className="border border-grey-blue px-2 py-1 rounded-sm hover:bg-grey-blue hover:text-pink-blush transition-colors hover:shadow">Register</button></Link>
        </nav>    
      </div>
      <div className={`text-2xl text-dark-blue cursor-pointer md:hidden ${showMenu? 'rotate-90 animate-rotate' : 'rotate-0 animate-rotateReverse'}`} onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
        </div>
    </header>
  );
};

export default Header;
