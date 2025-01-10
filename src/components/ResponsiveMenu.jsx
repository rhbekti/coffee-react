/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

const ResponsiveMenu = () => {
  return (
    <div
      className={`${
        open ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 x-30 flex h-screen w-[75%] flex-col justify-between bg-emerald-800 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-lg font-semibold text-white">
            <a href="/">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Home</li>
            </a>
            <a href="#menu">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Menu</li>
            </a>
            <a href="#about">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Tentang Kami</li>
            </a>
            <a href="#testimoni">
              <li onClick={()=>setOpen(false)} className="cursor-pointer">Testimoni</li>
            </a>
            <a href="#contact">
              <button onClick={()=>setOpen(false)} className="bg-emerald-600 text-white hover:bg-emerald-900 px-3 py-1 rounded-md">
                Contact
              </button>
            </a>
          </ul>
        </nav>
      </div>
      <div className="text-white">
        <h1>Made with ❤️ by Nyea</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
