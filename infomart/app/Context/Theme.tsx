'use client';

import { createContext, useContext, useState } from "react";

interface ThemeContextType {
    lang: string;
    setLang: (lang: string) => void;
  }
  
const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [lang, setLang] = useState('es');

    return (
        <ThemeContext.Provider value={{ lang, setLang }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);