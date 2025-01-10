// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";


const TestimoniData = [
  {
    id: 1,
    name: "John",
    text: "Hello",
    img: "https://piscum.photos/101/101",
  },
  {
    id: 2,
    name: "Ana",
    text: "Hi",
    img: "https://piscum.photos/102/102",
  },
  {
    id: 3,
    name: "Peter",
    text: "Hello",
    img: "https://piscum.photos/103/103",
  },
  {
    id: 4,
    name: "Luis",
    text: "Hi",
    img: "https://piscum.photos/104/104",
  },
];

const Testimoni = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimoni" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-center text-emerald-800 text-4xl font-bold font-cursize"
          >
            Testimoni
          </motion.h1>
        </div>
        {/* Testimoni cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Slider {...settings}>
            {TestimoniData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-emerald-800/10 relative">
                  <div className="mb-4">
                    <img src={data.img} alt={data.name} className="rounded-full w-20 h-20" />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursize2">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-emerald-800/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimoni;
