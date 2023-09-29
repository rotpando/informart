"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const ComponenteReact: React.FC = () => {
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
  

  
  
  return (
    <>
    <h2>Informe Octubre 2021</h2>
    <p>
      La Ley Nº 27.636, de Promoción del Acceso al Empleo Formal para las Personas Travestis, Transexuales y Transgénero Diana Sacayán-Lohana Berkins, fue sancionada en junio de 2021 y estableció que el Estado Argentino debe ocupar, en una proporción no inferior al 1% de la totalidad de su personal, puestos de trabajo con personas travestis, transexuales y transgénero, en todas las modalidades de contratación regular vigentes. Se fijó un plazo de dos años, contados a partir del 24/6/2021, para cumplir con tales obligaciones y se creó un Registro Único de Aspirantes para recibir postulaciones.
    </p>
    <p>
      Para cumplir con la Ley, en junio de 2023 debería haber 4.553 personas travestis, transexuales y/o transgénero trabajando en la Administración Pública.
    </p>
    <h2>
    Al 7 de octubre de 2021 los datos muestran que: 
    </h2>
    <ol className="list-decimal">
      <li className="mb-2">5.085 personas travestis, transexuales y/o transgénero se inscribieron en el registro único de aspirantes</li>
      <li className="mb-2">235 personas travestis, transexuales y/o transgénero trabajan actualmente en el Poder Ejecutivo Nacional, organismos centralizados y descentralizados
</li>
      <li className="mb-2">El 8,89% de los organismos del Estado Nacional cumple plenamente con la política de cupo, el 17,78% no cumple con ella en absoluto y el 35,36 no han dado respuesta respecto del cumplimiento de la Ley.
 </li>
     
    </ol>

    
    
   
    
  </>
  );
};

export default ComponenteReact;