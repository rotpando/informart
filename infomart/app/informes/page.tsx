'use client'
import { useThemeContext } from '../Context/Theme'
import React from 'react';
import Dropdown from '../components/Dropdown';

const Informes: React.FC = () => {
  const themeContext = useThemeContext();

  const { lang, setLang } = themeContext;
  const dropdownTitle = 'Informe Mayo 2023 / Report May 2023';
  const dropdownContent = (
    <div className="dropdown-content-wrapper">
      
    
    <h2>{lang === 'es' ? 'Informe  Mayo 2023' : 'Report May 2023'}</h2>

<p>{lang === 'es' ? 'La Ley Nº 27.636, de Promoción del Acceso al Empleo Formal para las Personas Travestis, Transexuales y Transgénero Diana Sacayán-Lohana Berkins, fue sancionada en junio de 2021 y estableció que el Estado Argentino debe ocupar, en una proporción no inferior al 1% de la totalidad de su personal, puestos de trabajo con personas travestis, transexuales y transgénero, en todas las modalidades de contratación regular vigentes. Se fijó un plazo de dos años, contados a partir del 24/6/2021, para cumplir con tales obligaciones y se creó un Registro Único de Aspirantes para recibir postulaciones. ' : 'The Law No. 27,636, Promoting Formal Employment Access for Transvestite, Transsexual, and Transgender Individuals Diana Sacayán-Lohana Berkins, was enacted in June 2021. It established that the Argentine State must employ, in a proportion not less than 1% of its total workforce, individuals who identify as transvestite, transsexual, or transgender, in all forms of current regular employment contracts. A two-year period, starting from June 24, 2021, was set to fulfill these obligations, and a Single Applicant Registry was created to receive applications.'}</p>
<br/>
<p>{lang === 'es' ? 'Para cumplir con la Ley, en junio de 2023 debería haber 4.553 personas travestis, transexuales y/o transgénero trabajando en la Administración Pública.' : 'To comply with the Law, by June 2023, there should be 4,553 transvestite, transsexual, and/or transgender individuals employed in the Public Administration.'} </p>
<br/>
<h3>{lang === 'es' ? 'Al al 29 de mayo de 2023 los datos muestran que:' : 'As of May 29, 2023, the data shows:'}</h3> 
<br/>
<p>{lang === 'es' ? '7.748 personas travestis, transexuales y/o transgénero se inscribieron en el registro único de aspirantes 709 personas travestis, transexuales y/o transgénero trabajan actualmente en el Poder Ejecutivo Nacional, organismos centralizados y descentralizados. El 11% de los organismos del Estado Nacional cumple plenamente con la política de cupo, el 22% no cumple con ella en absoluto y el 5,3 no han dado respuesta respecto del cumplimiento de la Ley. El 23,84% de las personas travestis, transexuales y/o transgénero que trabajan actualmente en la administración pública lo hace en calidad de planta permanente; el 11,42% como planta temporaria; el 39,49% bajo modalidades de contrato previstas por la ley marco; el 17,21% bajo otras modalidades; el 0,99% bajo contrato régimen de locación de obra; el 4,65% bajo contrato régimen de locación de servicios decreto N°1,109/17; y el 2,4% sin datos desagregados por tipo de contratación.' : '7,748 transvestite, transsexual, and/or transgender individuals have registered in the single applicant registry. 709 transvestite, transsexual, and/or transgender individuals are currently employed in the National Executive Branch, centralized and decentralized agencies. 11% of National State agencies fully comply with the quota policy, 22% do not comply with it at all, and 5.3% have not responded regarding compliance with the Law. 23.84% of transvestite, transsexual, and/or transgender individuals currently working in the public administration are in permanent positions; 11.42% are in temporary positions; 39.49% are under contract modalities provided by the framework law; 17.21% are under other modalities; 0.99% are under a contract regime of work location; 4.65% are under a contract regime of service location according to Decree No. 1,109/17; and 2.4% have data not disaggregated by type of contract.'}</p><br/>

<br/>
<p>{lang === 'es' ? 'Datos elaborados a partir de la información provista por la Subsecretaría de Diversidad del MMGYD sobre respaldatoria del Séptimo Informe de Implementación de Ley 27636' : 'Data compiled from information provided by the Undersecretariat of Diversity of the MMGYD regarding the supporting documentation of the Seventh Report of Implementation of Law 27,636.'} 
</p>

    </div> 
  );

  return (
    <main>
      <br/>
      <br/>
      <h2>Informes</h2>
      <Dropdown title={dropdownTitle} content={dropdownContent} />
      {/* ...otros elementos de tu página... */}
    </main>
  );
};

export default Informes;
