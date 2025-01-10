// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import bg from "../assets/bg.png";
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
const Contact = () => {
  return (
    <div
      id="contact"
      style={bgImage}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-full max-w-3xl bg-emerald-800/20 rounded-lg shadow-md py-8"
      >
        <h1 className="text-3xl font-bold text-center text-emerald-800 mb-6 font-cursize">
          Kontak Kami
        </h1>

        <p className="text-center text-lg text-grey-500 mb-8 font-cursize">
          Jika Anda memiliki pertanyaan atau ingin menghubungi kami, silakan
          mengisi formulir
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="nama"
              placeholder="Nama Anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                focus:ring-emerald-800"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                focus:ring-emerald-800"
            />
          </div>
          <div>
            <label
              htmlFor="pesan"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Pesan
            </label>
            <textarea
              name="pesan"
              id="pesan"
              placeholder="Pesan Anda"
              rows="5"
              className="w-full py-2 px-4  border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                focus:ring-emerald-800"
            ></textarea>
          </div>
          <button
            className="w-full py-2 px-4 bg-emerald-800 text-white font-semibold rounded-lg shadow-md
          hover:bg-emerald-850 transition duration-300 "
          >
            Kirim Pesan
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className=" text-gray-600">atau hubungi kami</p>
          <p className="font-semibold text-black">082790123</p>
          <p className="font-semibold text-black">Info@coffee.com</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
