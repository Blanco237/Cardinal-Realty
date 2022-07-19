import React from 'react'

import { FaUser, FaCross } from 'react-icons/fa'

const RecentlySoldModal = ({ property_id, listing_id, photo, prop_type,price,address,beds,baths,sqft,agent_name,agent_photo,sold_date,lat,lon, closeModal}) => {
  return (
    <aside className='fixed md:top-10 top-10 left-0 w-screen h-screen flex justify-center items-center bg-dark-faded animate-fadeIn z-10' onClick={closeModal}>
        <div className='md:w-9/12 w-11/12 bg-pink-blush rounded-md shadow-md p-4 flex flex-col gap-4 relative animate-popIn' onClick={(e)=>e.stopPropagation()}>
            <section className='w-full flex md:flex-row flex-col gap-2 justify-center items-center'>
                <div className='md:w-2/5 w-full flex justify-center items-center'>
                    <img src={photo} alt={prop_type+property_id} className='w-full h-full object-cover' />
                </div>
                <div className='md:w-3/5 w-full flex flex-col items-start text-left md:gap-3 gap-1'>
                    <p>Prop_ID: <span className='font-bold'>{property_id}</span></p>
                    <p>Listing_ID: <span className='font-bold'>{listing_id}</span></p>
                    <p>Property Type: <h1 className='font-bold text-dark-blue inline'>{prop_type}</h1></p>
                    <p>Price: <h2 className='font-bold text-grey-blue inline'>{price}</h2></p>
                    <p>Address: <span className='font-bold'>{address}</span></p>
                </div>
            </section>
            <section className='flex flex-col items-start text-sm md:text-md'>
                <h2>Property Details:</h2>
                <hr className='w-full bg-pink h-[2px] text-pink'/>
                <div className='grid grid-cols-3 gap-2 mt-2'>
                    <p>Beds: {beds}</p>
                    <p>Baths: {baths}</p>
                    <p>Area: {sqft}</p>
                    <p>Longitude: {lon}</p>
                    <p>Latitude: {lat}</p>
                    <p>Sold Date: {sold_date}</p>
                </div>
            </section>
            <section className='w-full flex flex-col justify-start items-start'>
                <h2>Agent Details:</h2>
                <hr className='w-full bg-pink h-[2px] text-pink'/>
                <div className='w-full flex justify-start items-center gap-4 mt-2'>
                    <div className='md:w-1/12 w-2/12 rounded-full overflow-hidden'>
                        <img src={agent_photo} alt={agent_name} className='w-full'/>
                    </div>
                    <h2 className='font-bold'>{agent_name}</h2>
                </div>
            </section>
            <button className='absolute top-0 right-2 bg-dark-blue px-3 py-1 text-pink-blush text-lg font-bold transition-colors hover:bg-pink hover:shadow-sm' onClick={closeModal}>X</button>
        </div>
    </aside>
  )
}

export default RecentlySoldModal