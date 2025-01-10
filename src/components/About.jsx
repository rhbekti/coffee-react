/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../assets/bg.png";
import Lottie from "lottie-react";
import Coffee from "../assets/Animation - 1736504505400.json";
import { motion } from "framer-motion";

const bgImage = {
  backgroundImage: "url(${Bg})",
  backgroundcolor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const About = () => {
  return (
    <div id="about" className="md:py-20 py-40" style={bgImage}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: "0.5" }}
        className="text-emerald-800 font-cursize text-5xl text-center"
      >
        Tentang Kami
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center max-w-7xl">
        {/* image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Lottie animationData={Coffee} className="md:w-[600px]" />
        </motion.div>
        {/* text section */}
        <div className="space-y-4 px-4 md:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-2xl font-cursize2 text-emerald-800"
          >
            Hasrat Untuk Menghasilkan Minuman yang Sempurna
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="font-cursize2"
          >
            Kami telah menyajikan kopi terbaik sejak tahun 2010, dengan dedikasi
            untuk menghadirkan cita rasa autentik yang memanjakan pecinta kopi
            di setiap tegukan. Temukan kenikmatan sejati dalam setiap cangkir
            kopi kami. Dibuat dari biji kopi pilihan yang dipanggang dengan
            sempurna, kami menghadirkan pengalaman kopi yang tak tertandingi.
            Cobalah sekarang dan rasakan perbedaannya!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
