'use client'
import { useThemeContext } from '../Context/Theme'
import React from 'react';
import Dropdown from '../components/Dropdown';
import ComponenteReact from './01';
import ComponenteReactEn from './01en';

const Informes: React.FC = () => {
  const themeContext = useThemeContext();

  const { lang, setLang } = themeContext;
  
  const dropdownContent = (
    <ComponenteReact></ComponenteReact>
  );
  const dropdownContentEn = (
    <ComponenteReactEn></ComponenteReactEn>
  );
  const dropdownContent1 = (
    <ComponenteReact></ComponenteReact>
  );
  const dropdownContentEn1 = (
    <ComponenteReactEn></ComponenteReactEn>
  );
  const dropdownContent2 = (
    <ComponenteReact></ComponenteReact>
  );
  const dropdownContentEn2 = (
    <ComponenteReactEn></ComponenteReactEn>
  );

  return (
    <main>
      <br/>
      <br/>
      <h2>{lang === 'es' ? 'Informes' : 'Reports'}</h2>
      {lang === 'es' ? (
  <Dropdown title={'Mayo 2023'} content={dropdownContent} />
) : (
  <Dropdown title={'May 2023'} content={dropdownContentEn} />
)}
      {lang === 'es' ? (
  <Dropdown title={'Octubre 2023'} content={dropdownContent} />
) : (
  <Dropdown title={'October 2023'} content={dropdownContentEn} />
)}{lang === 'es' ? (
  <Dropdown title={'Marzo 2023'} content={dropdownContent} />
) : (
  <Dropdown title={'March 2023'} content={dropdownContentEn} />
)}
      
    </main>
  );
};

export default Informes;
