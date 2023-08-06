import React from "react";
import Link from "next/link";
import Image from "next/image";
//import Logo from "./Logo";
//import Button from "./Button";

const Navbar = () => {
  return (
    <>
     <div className="w-full h-20 bg-emerald-800 bg-opacity-70 backdrop-blur-md sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          
          <ul className="hidden md:flex gap-x-6 text-white">
            <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/">
                <div>
          <Image className="text-current filter invert" src="/telescopio.svg" width={50} height={50} alt="InformARt" />
        </div>
                  
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/">
                <div>
          
        </div>
                  <p>InformARt</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/informes">
                  <p>Informes</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/recursero">
                  <p>Recursero</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/donar">
                  <p>Donar</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/contacto">
                  <p>Contactanos</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/contacto">
                  <p>English</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;