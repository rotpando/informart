'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";


interface ThemeContextType {
  lang: string;
  setLang: (lang: string) => void;
}
const defaultThemeContextValue: ThemeContextType = {
    lang: 'en', // Proporciona un valor predeterminado para lang
    setLang: () => {}, // Proporciona una función predeterminada para setLang
  };

const ThemeContext = createContext<ThemeContextType>(defaultThemeContextValue);

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState('es');

  return (
    <ThemeContext.Provider value={{ lang, setLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType | undefined =>
  useContext(ThemeContext);
