'use client'
import { useThemeContext } from '../../../Context/Theme'
import React from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const themeContext = useThemeContext();

  const { lang, setLang } = themeContext;
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
                <p>{lang === 'es' ? 'Informes' : 'Reports'}</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/recursero">
                <p>{lang === 'es' ? 'Mapas' : 'Maps'}</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/contacto">
                <p>{lang === 'es' ? 'Contactanos' : 'Contact us'}</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <Link href="/donar">
                <p>{lang === 'es' ? 'Donar' : 'Donate'}</p>
                </Link>
              </li>
              <li className="flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-y-1">
                <button onClick={()=> lang === 'es' ? setLang('en') : setLang('es')}>
                <p>{lang === 'es' ? 'English' : 'Español'}</p>
                </button>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;