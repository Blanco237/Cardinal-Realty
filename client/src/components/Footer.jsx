import React from 'react'

import logo from '../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer className='w-full min-h-[30vh] bg-army-green flex px-14 py-3 justify-around items-start text-white'>
        <div className="w-2/12 flex flex-col items-center justify-center">
            <img src={logo} alt="Cardinal Logo" className="w-8/12"/>
            <p className="text-md">
                Your Ultimate Real Estate Home Matcher
            </p>
        </div>
        <div>
            <h2 className='text-xl font-bold underline'>Quick Links</h2>
            <ul className="flex flex-col items-start pl-4 gap-4 justify-center">
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
        <div>
            <h2 className='text-xl font-bold underline'>Utilities</h2>
            <ul className="flex flex-col items-start pl-4 gap-4 justify-center">
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