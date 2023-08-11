"use client";
import React from 'react';
import Dropdown from '../components/Dropdown';

const Informes: React.FC = () => {
  const dropdownTitle = 'Informe Mayo 2023';
  const dropdownContent = (
    <div className="dropdown-content-wrapper">
      
    
    <h2>Informe  Mayo 2023</h2>

<p>La Ley Nº 27.636, de Promoción del Acceso al Empleo Formal para las Personas Travestis, Transexuales y Transgénero Diana Sacayán-Lohana Berkins, fue sancionada en junio de 2021 y estableció que el Estado Argentino debe ocupar, en una proporción no inferior al 1% de la totalidad de su personal, puestos de trabajo con personas travestis, transexuales y transgénero, en todas las modalidades de contratación regular vigentes. Se fijó un plazo de dos años, contados a partir del 24/6/2021, para cumplir con tales obligaciones y se creó un Registro Único de Aspirantes para recibir postulaciones. </p>

<p>Para cumplir con la Ley, en junio de 2023 debería haber 4.553 personas travestis, transexuales y/o transgénero trabajando en la Administración Pública. </p>

<h3>Al al 29 de mayo de 2023 los datos muestran que:</h3> 

<p>7.748 personas travestis, transexuales y/o transgénero se inscribieron en el registro único de aspirantes
709 personas travestis, transexuales y/o transgénero trabajan actualmente en el Poder Ejecutivo Nacional, organismos centralizados y descentralizados
El 11% de los organismos del Estado Nacional cumple plenamente con la política de cupo, el 22% no cumple con ella en absoluto y el 5,3 no han dado respuesta respecto del cumplimiento de la Ley. 
El 23,84% de las personas travestis, transexuales y/o transgénero que trabajan actualmente en la administración pública lo hace en calidad de planta permanente; el 11,42% como planta temporaria; el 39,49% bajo modalidades de contrato previstas por la ley marco; el 17,21% bajo otras modalidades; el 0,99% bajo contrato régimen de locación de obra; el 4,65% bajo contrato régimen de locación de servicios decreto N°1,109/17; y el 2,4% sin datos desagregados por tipo de contratación.</p>
<p>Datos elaborados a partir de la información provista por la Subsecretaría de Diversidad del MMGYD sobre respaldatoria del Séptimo Informe de Implementación de Ley 27636 
</p>
<p>Datos elaborados a partir de la información provista por la Subsecretaría de Diversidad del MMGYD sobre respaldatoria del Séptimo Informe de Implementación de Ley 27636 
</p>



    </div>
  );

  return (
    <div className="page">
      <h2>Informes</h2>
      <Dropdown title={dropdownTitle} content={dropdownContent} />
      {/* ...otros elementos de tu página... */}
    </div>
  );
};

export default Informes;
