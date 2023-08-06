import React from "react";
import Link from "next/link";
//import Logo from "./Logo";
//import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/contacts">
                  <p>Contacto</p>
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;