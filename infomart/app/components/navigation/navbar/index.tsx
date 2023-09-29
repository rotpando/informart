"use client";
import { useThemeContext } from "../../../Context/Theme";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiHome,
  FiFileText,
  FiMap,
  FiMail,
  FiHeart,
  FiGlobe,
} from "react-icons/fi";

const Navbar = () => {
  const themeContext = useThemeContext();

  const { lang, setLang } = themeContext;

  return (
    <nav className="bg-emerald-800 bg-opacity-50 top-0 z-20 w-full px-8 md:px-auto backdrop-filter backdrop-blur-lg p-2 text-sm sm:text-base md:text-lg lg:text-xl ">
      <div className="md:h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        
        <div className="">
          
          <Link className="links" href="/">
                <div><Image
                    className="text-current filter invert h-10 w-10"
                    src="/telescopio.svg"
                    width={50}
                    height={50}
                    alt="InformARt"
                     />
                  
                </div>
              </Link>
          
          
            
          
        </div>
        <div className="text-white order-3 w-full md:w-auto md:order-2">
          <ul className="flex gap-2">
          <li className="items-center">
              
              <Link className="inline-flex m-2 items-center space-x-2 transform hover:translate-y-1" href="/">
                <FiHome /><p className="hidden sm:block m-3">InformARt</p>
              </Link>
            </li>
            <li className="items-center">
              
            <Link className="inline-flex m-2 items-center space-x-2 transform hover:translate-y-1" href="/informes">
                <FiFileText /><p className="hidden sm:block m-3">{lang === "es" ? "Informes" : "Reports"}</p>
              </Link>
            </li>
            <li className="items-center">
              
              <Link className="inline-flex m-2 items-center space-x-2 transform hover:translate-y-1" href="/recursero">
                <FiMap /><p className="hidden sm:block m-3">{lang === "es" ? "Mapas" : "Maps"}</p>
              </Link>
            </li>
            <li className="items-center">
              
            <Link className="inline-flex m-2 items-center space-x-2 transform hover:translate-y-1" href="/contacto">
                <FiMail />
                <p className="hidden sm:block m-3">{lang === "es" ? "Contactanos" : "Contact us"}</p>
              </Link>
            </li>
            <li className="items-center">

              <Link className="inline-flex m-2 items-center space-x-2 transform hover:translate-y-1" href="/donar">
              <FiHeart />
                <p className="hidden sm:block m-3">{lang === "es" ? "Donar" : "Donate"}</p>
              </Link>
            </li>
          
          </ul>
        </div>
        <div className="order-2 md:order-3">
        
        <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="inline-flex items-center space-x-2 transform hover:translate-y-1"> 
      <FiGlobe /><p>{lang === "es" ? "English" : "Español"}</p> 
    </button>
        </div>
      </div>
    </nav>
  );
};





// Reusable NavItem component
const NavItem = ({icon: Icon, path, label}) => {
  return (
    <Link href={path}>
      <div className="flex items-center space-x-2 hover:text-emerald-500 transition">
        <Icon />
        <p>{label}</p>
      </div>
    </Link>
  )
}

export default Navbar;