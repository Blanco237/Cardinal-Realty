import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBath,
  faBed,
  faDrawPolygon,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import RecentlySoldModal from "./RecentlySoldModal";

const PropertyCard = ({
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
  lon,
}) => {
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
    lon,
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-center rounded-md  overflow-hidden shadow-md mb-3 md:static relative">
        <div className="md:w-2/5 w-full object-cover p-0 overflow-hidden">
          <img
            src={photo}
            alt="property"
            className="w-[110%] max-w-[110%] object-cover"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col md:py-0 py-2 items-start pl-4 px-2 md:px-0 border border-t-0 md:border-t md:border-l-0 rounded-b-md md:rounded-bl-none">
          <div className="w-full flex justify-end md:static absolute top-0 right-0">
            <span className="px-4 py-2 bg-dark-blue text-white cursor-pointer transition-colors hover:text-pink" onClick={()=>setShowModal(true)}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </div>
          <h1 className="text-dark-blue text-2xl font-semibold mb-1">
            {prop_type}
          </h1>
          <h3 className="text-blue text-xl font-semibold mb-1">{price}</h3>
          <div className="w-full justify-start items-center flex text-md mb-1">
            <i>
              <FontAwesomeIcon icon={faLocationCrosshairs} />
            </i>
            <p className=" text-left text-[0.6rem] pl-1">{address}</p>
          </div>
          <div className="w-full justify-between md:justify-around flex gap-4 md:text-sm text-[0.7rem] mt-2">
            <div className="flex gap-1">
              <i>
                <FontAwesomeIcon icon={faBed} />
              </i>
              <p>{beds} bedrooms</p>
            </div>
            <div className="flex gap-1">
              <i>
                <FontAwesomeIcon icon={faBath} />
              </i>
              <p>{baths} bathrooms</p>
            </div>
            <div className="flex gap-1">
              <i>
                <FontAwesomeIcon icon={faDrawPolygon} />
              </i>
              <p>{sqft}</p>
            </div>
          </div>
        </div>
      </div>
      {showModal && <RecentlySoldModal {...propertyDetails} closeModal={()=>setShowModal(false)}/>}
    </>
  );
};

export default PropertyCard;
