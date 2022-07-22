import React from 'react'

import logo from '../assets/images/logo-white.png';

const Footer = () => {
    console.log(window.location.pathname);
    if(window.location.pathname === '/login' || window.location.pathname === '/register') {
        return null;
    }

  return (
    <footer className='w-full min-h-[30vh] bg-army-green flex md:flex-row flex-col md:px-14 px-4 py-3 justify-around items-start text-white'>
        <div className="md:w-2/12 w-3/5 flex flex-col md:items-center items-start text-left md:text-center md:gap-4 justify-center">
            <img src={logo} alt="Cardinal Logo" className="w-8/12"/>
            <p className="text-md">
                Your Ultimate Real Estate Home Matcher
            </p>
        </div>
        <div className='text-left'>
            <h2 className='text-xl font-bold underline  mb-3 mt-2'>Quick Links</h2>
            <ul className="flex flex-col items-start gap-4 justify-center list-none">
                <li className="text-sm">
                    <a href="#">Home</a>
                </li>
                <li className="text-sm">
                    <a href="#">About</a>
                </li>
                <li className="text-sm">
                    <a href="#">Contact</a>
                </li>
                <li className="text-sm">
                    <a href="#">Terms &amp; Conditions</a>
                </li>
                <li className="text-sm">
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
        </div>
        <div className='text-left'>
            <h2 className='text-xl font-bold underline mb-3 mt-2'>Utilities</h2>
            <ul className="flex flex-col items-start gap-4 justify-center list-none">
                <li className="text-sm">
                    <a href="#">Search Properties</a>
                </li>
                <li className="text-sm">
                    <a href="#">3D Property Viewer</a>
                </li>
        </ul>
         </div>
    </footer>
  )
}

export default Footer