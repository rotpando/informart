'use client'
import { useThemeContext } from '../Context/Theme'
import React from 'react';
import Dropdown from '../components/Dropdown';
import ComponenteReact from './01';
import ComponenteReactEn from './01en';
import ComponenteReact2 from './02';
import ComponenteReactEn2 from './02en';
import ComponenteReact1 from './03';
import ComponenteReactEn1 from './03en';
import ComponenteReact3 from './04';
import ComponenteReactEn3 from './04en';

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
    <ComponenteReact1></ComponenteReact1>
  );
  const dropdownContentEn1 = (
    <ComponenteReactEn1></ComponenteReactEn1>
  );
  const dropdownContent2 = (
    <ComponenteReact2></ComponenteReact2>
  );
  const dropdownContentEn2 = (
    <ComponenteReactEn2></ComponenteReactEn2>
  );
  const dropdownContent3 = (
    <ComponenteReact3></ComponenteReact3>
  )
  const dropdownContentEn3 = (
    <ComponenteReactEn3></ComponenteReactEn3>
  );
  return (
    <main>
      <br/>
      <br/>
      <h2>{lang === 'es' ? 'Informes' : 'Reports'}</h2>
      <p>{lang === 'es' ? 'Algunos informes aun no han sido subidos.' : 'Some reports are not yet online.'}</p>
      <br/>
      {lang === 'es' ? (
  <Dropdown title={'Mayo 2023'} content={dropdownContent} />
) : (
  <Dropdown title={'May 2023'} content={dropdownContentEn} />
)}
      {lang === 'es' ? (
  <Dropdown title={'Marzo 2022'} content={dropdownContent2} />
) : (
  <Dropdown title={'March 2022'} content={dropdownContentEn2} />
)}
{lang === 'es' ? (
  <Dropdown title={'Octubre 2021'} content={dropdownContent3} />
) : (
  <Dropdown title={'Octuber 2021'} content={dropdownContentEn3} />
)}
      
    </main>
  );
};

export default Informes;
