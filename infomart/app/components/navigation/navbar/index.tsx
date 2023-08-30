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
    
      <div
        className="h-60 sm:h-70 lg:h-20 w-full h-20 bg-emerald-800 bg-opacity-70 backdrop-blur-md sticky top-0"
        style={{ zIndex: 9999, position: "fixed" }}
      >
        <style jsx>{`
        @media (max-width: 768px) {

          ul {
            display: block;
          }
        
          li i {
            display: none;
          }
        
        }
      `}</style>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          {" "}
          {/* Cambio en esta línea */}
          <div className="flex">
          <ul className="flex gap-x-6 text-white">
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <Link href="/">
                <div>
                  <Image
                    className="text-current filter invert"
                    src="/telescopio.svg"
                    width={50}
                    height={50}
                    alt="InformARt"
                  />
                </div>
              </Link>
            </li>

            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <FiHome />
              <Link href="/">
                <p>InformARt</p>
              </Link>
            </li>
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <FiFileText />
              <Link href="/informes">
                <p>{lang === "es" ? "Informes" : "Reports"}</p>
              </Link>
            </li>
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <FiMap />
              <Link href="/recursero">
                <p>{lang === "es" ? "Mapas" : "Maps"}</p>
              </Link>
            </li>
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <FiMail />
              <Link href="/contacto">
                <p>{lang === "es" ? "Contactanos" : "Contact us"}</p>
              </Link>
            </li>
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <FiHeart />
              <Link href="/donar">
                <p>{lang === "es" ? "Donar" : "Donate"}</p>
              </Link>
            </li>
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
              <FiGlobe />
              <button
                onClick={() => (lang === "es" ? setLang("en") : setLang("es"))}
              >
                <p>{lang === "es" ? "English" : "Español"}</p>
              </button>
            </li>
          </ul>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
