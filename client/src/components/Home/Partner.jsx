import React from 'react'

import logo from '../../assets/images/logo-metal.png'

const Partner = () => {
  return (
    <section className='w-full min-h-[10rem] bg-pink-blush px-6 py-3 mt-32 md:mt-16 z-0 shadow-lg flex flex-col gap-5' >
        <h1 className='text-2xl font-semibold text-dark-blue'>Our Partners</h1>
        <div className='w-full flex gap-12 justify-center flex-wrap'>
            {
                [...Array(5)].map((item, index) => {
                    return <img key={index} className='md:w-[10%] w-3/12 h-auto filter grayscale hover:grayscale-0 transition-all animate-pulse hover:animate-none' src={logo} alt='logo' />
                })
            }
        </div>
        <p>Partner With Us <span className='cursor-pointer text-pink'>Here</span></p>
    </section>
  )
}

export default Partner