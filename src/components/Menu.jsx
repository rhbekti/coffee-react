/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../assets/latte.png";
import Img2 from "../assets/cappucino.png";
import Img3 from "../assets/espresso.png";
import { motion } from 'framer-motion';

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Cappuccino",
    description: "A cappuccino is a coffee drink that is made with a combination of espresso.",
  },
  {
    id: 2,
    img: Img1,
    name: "Latte",
    description: "A latte is a coffee drink that is made with a combination of espresso and steamed.",
  },
  {
    id: 3,
    img: Img3, // Changed from Img2 to Img3 for Espresso image.
    name: "Espresso",
    description: "Espresso is a concentrated coffee drink that is made by forcing pressurized hot water through.",
  }
];

const Menu = () => {
  return (
    <div id="menu" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-4xl font-bold font-cursize text-emerald-800">
            Kopi Terbaik Untukmu
          </motion.h1>
        </div>
        {/* Menu card section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {MenuData.map((menu) => (
            <div key={menu.id} className="rounded-2xl bg-white hover:bg-emerald-800 transition-all hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[122px]">
                <img src={menu.img} alt={menu.name} className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{menu.name}</h1> {/* Corrected 'menu.home' to 'menu.name' */}
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{menu.description}</p>
                <div className="flex justify-between mt-5 px-6 items-center">
                  <p className="text-lg font-semibold">25.000</p>
                  <button className="bg-emerald-800 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-emerald-800">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Menu;
