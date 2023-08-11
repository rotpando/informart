import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
import { ThemeContextProvider } from './Context/Theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html>
      <body className={inter.className}>
      <ThemeContextProvider>
        <Navbar/>
        {children}
        <Footer/>
      </ThemeContextProvider>
      </body>
    </html>
  );
}
