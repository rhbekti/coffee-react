/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../assets/logoku.png";
import { Menu, X } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-emerald-800 px-5 md:px-0 fixed z-50 w-full top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 ">
        {/* logo section */}
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-10 h-10" />
          <h1 className="text-2x text-white font-cursize"> Coffeeku </h1>
        </div>
        {/* menu section */}
        <nav className="md:flex hidden items-center gap-7">
          <ul className="flex gap-7 items-center text-xl font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="#menu">
              <li className="cursor-pointer">Menu</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer">Tentang Kami</li>
            </a>
            <a href="#testimoni">
              <li className="cursor-pointer">Testimoni</li>
            </a>
          </ul>
          <a href="#contact"><button className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1 rounded-md">Contact
          </button></a>
          
        </nav>
        {
        open ? <X onClick={()=>setOpen(false)} className="text-white w-7 h-7 md:hidden" /> : 
          <Menu
            onClick={() => setOpen(true)}
            className="text-white w-7 h-7 md:hidden"
          />
        }

      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>

  )
}

export default Navbar