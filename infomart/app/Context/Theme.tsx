'use client';

import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  lang: string;
  setLang: (lang: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState('es');

  return (
    <ThemeContext.Provider value={{ lang, setLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType | undefined =>
  useContext(ThemeContext);
