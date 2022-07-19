import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    draggable: true,
    centerPadding: '2rem',
    className: 'w-12/12 mr-4',
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    accessibility: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="w-full min-h-[70vh] text-white bg-dark-blue px-[6vw] py-4 flex flex-col ">
      <h1 className="text-2xl font-bold md:mb-20 mb-6">
        What Our Customers say About Us
      </h1>
      <Slider {...settings}>
        {[...Array(7)].map(() => {
          return (
            <div className="rounded flex flex-col p-6 border items-start text-left mr-3">
              <h3 className="font-bold">Adam Smith</h3>
              <p className="text-sm">Product User</p>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium veniam doloremque at blanditiis repellendus
                obcaecati magnam id eum delectus debitis voluptas laborum
                numquam, nulla fuga fugit dolorem. Assumenda, architecto velit.
              </p>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
