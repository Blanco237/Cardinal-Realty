import React from 'react'

import classes from '../../assets/styles/components/sectiontwo.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare as faArrowUpRight } from '@fortawesome/free-solid-svg-icons'

const SectionTwo = () => {
  return (
    <section className='w-full min-h-screen bg-dark-blue px-14 pr-8 py-4 flex gap-10 justify-center'>
        <div className='w-1/2  flex flex-col px-6 pt-10 h-fit gap-3'>
            <h1 className='text-pink-blush text-4xl font-semibold text-left'>We Provide You With the Best Property and Agents to build Your <span className='text-pink'>Dream Home.</span></h1>
            <div className={`${classes.twoImage} h-[90vh] bg-black rounded-md w-10/12`}>
                <img src="" alt="" />
            </div>
        </div>
        <div className='w-1/2 flex flex-col items-center pr-8 py-10 justify-between'>
            <div className='w-full h-[63vh] flex justify-end'>
                <div className={`${classes.leftImage} w-7/12 h-full rounded shadow-sm shadow-white relative`}>
                    <aside className='flex flex-col gap-1 w-32   bg-pink-blush px-1 py-2 shadow rounded absolute left-[20%] bottom-[-70px]'>
                        <i className={classes.icon}><FontAwesomeIcon icon={faArrowUpRight} /></i>
                        <h3 className='font-semibold'>820+</h3>
                        <p>Property Build</p>
                    </aside>
                </div>
            </div>
            <div className='text-left pl-3'>
                <h2 className='text-pink text-lg font-semibold'>Let Us Guide You Home</h2>
                <p className='text-pink-blush'>Our passion for helping others and a true love for Real Estate are two of the main reasons to our success. Our agents have vast experience in Real Estate and strive to build relationships with our clients based on trust, integrity and confidence; taking time to truly understand the needs and wants of our clients.</p>
            <button className='bg-metal px-4 py-2 text-pink-blush mt-1 rounded shadow hover:bg-bubble-gum-faded active:shadow-none transition-all'>View Our Properties</button>
            </div>
        </div>
    </section>
  )
}

export default SectionTwo