import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Partner from '../components/Home/Partner'
import RecentSales from '../components/Home/RecentSales'
import SectionTwo from '../components/Home/SectionTwo'
import SVG from '../components/Home/SVG'
import Testimonials from '../components/Home/Testimonials'

const Home = () => {
  return (
    <div className='bg-pink-blush w-full mt-20 pt-8 flex flex-col justify-center items-center'>
        <HeroSection />
        <Partner />
        <SectionTwo />
        <RecentSales />
        <Testimonials />
        <SVG />
    </div>
  )
}

export default Home