import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBath, faBed, faDrawPolygon, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const PropertyCard = ({ property_id, listing_id, photo, prop_type,price,address,beds,baths,sqft,agent_name,agent_photo,sold_date,lat,lon}) => {

    const propertyDetails = {
        property_id,
        listing_id,
        photo,
        prop_type,
        price,
        address,
        beds,
        baths,
        sqft,
        agent_name,
        agent_photo,
        sold_date,
        lat,
        lon
      };

  return (
    <div className='w-full flex justify-center rounded-md  overflow-hidden shadow'>
        <div className='w-2/5'>
            <img src={photo} alt='property' className='w-full object-cover'/>
        </div>
        <div className='w-3/5 flex flex-col border-t border-b border-r rounded-r-md'>
            <div className='w-full flex justify-end'>
                <span className='px-4 py-2 bg-dark-blue text-white cursor-pointer hover:text-pink'><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></span>
            </div>
            <h1 className='text-dark-blue text-2xl font-semibold'>{prop_type}</h1>
            <h3 className='text-blue text-xl'>{price}</h3>
            <div className='w-full justify-start flex gap-1'>
                <i><FontAwesomeIcon icon={faLocationCrosshairs}/></i>
                <p>{address}</p>
            </div>
            <div className='w-full justify-start flex gap-4'>
                <div className='flex gap-1'>
                    <i><FontAwesomeIcon icon={faBed}/></i>
                    <p>{beds}</p>
                </div>
                <div className='flex gap-1'>
                    <i><FontAwesomeIcon icon={faBath}/></i>
                    <p>{baths}</p>
                </div>
                <div className='flex gap-1'>
                    <i><FontAwesomeIcon icon={faDrawPolygon}/></i>
                    <p>{sqft}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard