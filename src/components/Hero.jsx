/* eslint-disable no-unused-vars */
import React from "react";
import coffee from "../assets/coffee2.png";
import Bean1 from "../assets/bean1.png";
import Bean2 from "../assets/bean2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="from-slate-100 to-emerald-700 bg-gradient-to-r mt-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0">
        {/*text section*/}
        <div className="space-y-7 px-5 md:px-10">
          <motion.h3
           initial={{opacity:0,x:-50}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:1.0,delay:"0.2"}}
          className="text-emerald-800 font-semibold font-cursize text-lg ">
            Selamat Datang di Coffeeku
          </motion.h3>
          <motion.h1 
          initial={{opacity:0,x:-60}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.0,delay:"0.4"}}
          className="text-4xl md:text-6xl font-bold font-cursize2 ">
            Nikmati secangkir <span className="text-emerald-800"> Kopi </span>di
            Coffeeku.
          </motion.h1>
          <motion.p
          initial={{opacity:0,x:-60}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.2,delay:"0.6"}}
          >Temukan berbagai varian kopi unik dan nikmati pengalaman rasa yang
            tak terlupakan hanya di Coffeeku
          </motion.p>
          <motion.div 
          initial={{opacity:0,x:-70}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.4,delay:"0.8"}}
          className="flex gap-2"></motion.div>
          <a href="#menu">
            <button className="bg-emerald-600 text-white px-3 py-2 rounded-md">
              View Menu
            </button>
          </a>
          <a href="#menu">
            <button className=" bg-transparent border border-emerald-800 text-emerald-800 px-3 py-2 rounded-md">
              Our Story
            </button>
          </a>
        </div>
        {/* image section */}
        <div className="relative">
          <motion.img 
           initial={{opacity:0,scale:0.5}}
           whileInView={{opacity:1,scale:1}}
           transition={{duration:1.3,delay:"0.5"}}
          src={coffee} alt="" className="w-[500px]" />
        </div>
        <motion.img 
         initial={{opacity:0,x:400,scale:0.7}}
         whileInView={{opacity:1,x:0,scale:1,rotate:45}}
         transition={{duration:1.6,delay:"0.7"}}
        src={Bean1} alt="" className="absolute hidden md:block bottom-20 left-40 x-10 w-20 rotate-90" />
        <motion.img
        initial={{opacity:0,x:600,y:200,scale:0.7}}
        whileInView={{opacity:1,x:0,y:0,scale:1}}
        transition={{duration:1.6,delay:"0.7"}}
        src={Bean2} alt="" className="absolute hidden md:block top-14 left-10 w-20 rotate-30" />
        <motion.img
        initial={{opacity:0,x:-100,y:100,scale:0.7}}
        whileInView={{opacity:1,x:0,y:0,scale:1,rotate:45}}
        transition={{duration:1.6,delay:"0.7"}}
        src={Bean1} alt="" className="absolute hidden md:block w-20 top-10 right-20 -rotate-45" />
      </div>
    </div>
  );
};

export default Hero;
