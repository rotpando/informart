"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const ComponenteReact: React.FC = () => {
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
  const data = [
    { name: "Contrato de planta permanente", value: 169 },
    { name: "Contrato de planta temporaria", value: 81 },
    { name: "Contrato modalidades previstas en la ley marco", value: 280 },
    { name: "Contrato otras modalidades", value: 122 },
    { name:  "Contrato régimen de locación de servicios decreto N 1,109/7", value: 33},
    { name:  "Sin datos desagregados por tipo de contratación", value: 17},
  ];

  const data1 = [
    { name: "0%", value: 33 },
    { name: "0,01% al 0,5%", value: 73 },
    { name: "1% y más", value: 20 },
    { name: "Sin datos", value: 16 },
  ];
  
  return (
    <>
    <h2>Informe  Mayo 2023</h2>
    <p>
      La Ley Nº 27.636, de Promoción del Acceso al Empleo Formal para las Personas Travestis, Transexuales y Transgénero Diana Sacayán-Lohana Berkins, fue sancionada en junio de 2021 y estableció que el Estado Argentino debe ocupar, en una proporción no inferior al 1% de la totalidad de su personal, puestos de trabajo con personas travestis, transexuales y transgénero, en todas las modalidades de contratación regular vigentes. Se fijó un plazo de dos años, contados a partir del 24/6/2021, para cumplir con tales obligaciones y se creó un Registro Único de Aspirantes para recibir postulaciones.
    </p>
    <p>
      Para cumplir con la Ley, en junio de 2023 debería haber 4.553 personas travestis, transexuales y/o transgénero trabajando en la Administración Pública.
    </p>
    <h2>
      Al al 29 de mayo de 2023 los datos muestran que:
    </h2>
    <ol className="list-decimal">
      <li className="mb-2">7.748 personas travestis, transexuales y/o transgénero se inscribieron en el registro único de aspirantes</li>
      <li className="mb-2">709 personas travestis, transexuales y/o transgénero trabajan actualmente en el Poder Ejecutivo Nacional, organismos centralizados y descentralizados</li>
      <li className="mb-2">El 11% de los organismos del Estado Nacional cumple plenamente con la política de cupo, el 22% no cumple con ella en absoluto y el 5,3 no han dado respuesta respecto del cumplimiento de la Ley.</li>
      <li className="mb-2">El 23,84% de las personas travestis, transexuales y/o transgénero que trabajan actualmente en la administración pública lo hace en calidad de planta permanente; el 11,42% como planta temporaria; el 39,49% bajo modalidades de contrato previstas por la ley marco; el 17,21% bajo otras modalidades; el 0,99% bajo contrato régimen de locación de obra; el 4,65% bajo contrato régimen de locación de servicios decreto N°1,109/17; y el 2,4% sin datos desagregados por tipo de contratación.</li>
    </ol>

    <table className="table-auto">
      <thead>
        <br/>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">ESTADO DE CUMPLIMIENTO DE CUPO POR ORGANISMO</td>
          <td className="border px-4 py-2">N</td>
          <td className="border px-4 py-2">%</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">0%</td>
          <td className="border px-4 py-2">33</td>
          <td className="border px-4 py-2">22,00%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Entre 0,01% y 0,5%</td>
          <td className="border px-4 py-2">73</td>
          <td className="border px-4 py-2">48,67%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Entre 0,50% y 0,99%</td>
          <td className="border px-4 py-2">20</td>
          <td className="border px-4 py-2">13,33%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">1% y mas</td>
          <td className="border px-4 py-2">16</td>
          <td className="border px-4 py-2">10,67%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Sin datos de Planta total para calculo del 1%</td>
          <td className="border px-4 py-2">8</td>
          <td className="border px-4 py-2">5,33%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Total</td>
          <td className="border px-4 py-2">150</td>
          <td className="border px-4 py-2">100%</td>
        </tr>
       <p>Datos elaborados a partir de la información provista por la Subsecretaría de Diversidad del MMGYD sobre respaldatoria del Séptimo Informe de Implementación de Ley 27636 
</p>
      </tbody>
    </table>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<PieChart width={400} height={400}>
      <Pie
        data={data1}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>

    <table className="table-auto">
      <thead>
        <br/>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Modalidad de contratación</td>
          <td className="border px-4 py-2">N</td>
          <td className="border px-4 py-2">%</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Contrato de planta permanente</td>
          <td className="border px-4 py-2">169</td>
          <td className="border px-4 py-2">23,84%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Contrato de planta temporaria</td>
          <td className="border px-4 py-2">81</td>
          <td className="border px-4 py-2">11,42%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Contrato modalidades previstas en la ley marco</td>
          <td className="border px-4 py-2">280</td>
          <td className="border px-4 py-2">39,49%</td>
        </tr>
        
        <tr>
        <td className="border px-4 py-2">Contrato otras modalidades</td>
          <td className="border px-4 py-2">122</td>
          <td className="border px-4 py-2">17,21%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Contrato régimen de locación de servicios decreto N 1,109/7</td>
          <td className="border px-4 py-2">33</td>
          <td className="border px-4 py-2">4,65%</td>
        </tr>
        
        <tr>
        <td className="border px-4 py-2">Sin datos desagregados por tipo de contratación</td>
          <td className="border px-4 py-2">17</td>
          <td className="border px-4 py-2">2,40%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Total</td>
          <td className="border px-4 py-2">709</td>
          <td className="border px-4 py-2">100%</td>
        </tr>
       
       <p>Datos elaborados a partir de la información provista por la Subsecretaría de Diversidad del MMGYD sobre respaldatoria del Séptimo Informe de Implementación de Ley 27636
</p>
      </tbody>
    </table>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data1.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  </>
  );
};

export default ComponenteReact;