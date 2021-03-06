import React, {useState} from "react";

import house from "../../assets/images/house.jpg";
import agent from '../../assets/images/timothy.jpg'
import PropertyCard from "../../partials/PropertyCard";

const RecentSales = () => {
  const data = [
    {
      property_id: 1,
      listing_id: 10220,
      photo: house,
      prop_type: "Condo",
      price: "$1,000,000",
      address:
        "52 Hamilton Ter in Hamilton Heights - Manhattan,NY, New York City, 10031",
      beds: 3,
      baths: 2,
      sqft: "1,000 sqft",
      agent_name: "John Doe",
      agent_photo: agent,
      sold_date: "Aug 31 2021",
      lat: 40.823225,
      lon: -73.946494,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-pink-blush md:px-14 px-4 py-6 mt-4">
      <h1 className="text-dark-blue text-3xl font-semibold mb-6">
        Check out Our Recent Sales
      </h1>
      <div className="w-full grid md:grid-cols-2 gap-4 grid-cols-1">
        {
            [...Array(6)].map((_, i) => (
                <PropertyCard key={i} {...data[0]} />
            ))
        }
      </div>
    </section>
  );
};

export default RecentSales;
