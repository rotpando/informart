"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const ComponenteReact: React.FC = () => {
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
  const data = [
    { name: "0%", value: 20.41 },
    { name: "Entre 0,01% y 0,99%", value: 42.18 },
    { name: "1% y más", value: 8.16 },
    { name: "Sin datos de Planta Total", value: 29.25 },
   
  ];

  const data1 = [
    { name: "Contrato de plata permanente", value: 10.25 },
    { name: "Contrato de planta temporaria", value:11.313 },
    { name: "Contrato modalidades previstas en la ley", value: 49.82 },
    { name: "Contrato otras modalidades", value: 16.60 },
    { name: "Contrato régimen de locación de obra", value: 4.95 },
    { name: "Contrato régimen de locacion de servicios", value: 7.07},
  ];
  
  return (
    <>
    <h2>Informe Marzo 2022</h2>
    <p>
    La Ley Nº 27.636, de Promoción del Acceso al Empleo Formal para las Personas Travestis, Transexuales y Transgénero Diana Sacayán-Lohana Berkins, fue sancionada en junio de 2021 y estableció que el Estado Argentino debe ocupar, en una proporción no inferior al 1% de la totalidad de su personal, puestos de trabajo con personas travestis, transexuales y transgénero, en todas las modalidades de contratación regular vigentes. Se fijó un plazo de dos años, contados a partir del 24/6/2021, para cumplir con tales obligaciones y se creó un Registro Único de Aspirantes para recibir postulaciones. 

    </p>
    <p>
    Para cumplir con la Ley, en junio de 2023 debería haber 4.553 personas travestis, transexuales y/o transgénero trabajando en la Administración Pública. 

    </p>
    <h2>
    Al 31 de marzo de 2022 los datos muestran que: 

    </h2>
    <ol className="list-decimal">
      <li className="mb-2">5.085 personas travestis, transexuales y/o transgénero se inscribieron en el registro único de aspirantes
</li>
      <li className="mb-2">293 personas travestis, transexuales y/o transgénero trabajan actualmente en el Poder Ejecutivo Nacional, organismos centralizados y descentralizados</li>
      <li className="mb-2">El 8,6% de los organismos del Estado Nacional cumple plenamente con la política de cupo, el 20,41% no cumple con ella en absoluto y el 29,25 no han dado respuesta respecto del cumplimiento de la Ley.</li>
      <li className="mb-2">El 10,25% de las personas travestis, transexuales y/o transgénero que trabajan actualmente en la administración pública lo hace en calidad de planta permanente; el 11,31% como planta temporaria; el 49,82% bajo modalidades de contrato previstas por la ley marco de empleo público; el 16,60% bajo otras modalidades; el 4,95% bajo contrato régimen de locación de obra; y el 7,07% bajo contrato régimen de locación de servicios decreto N°1,109/17.
</li>
    </ol>

    <table className="table-auto">
      <thead>
        <br/>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Estado de cumplimiento por organismo</td>
          <td className="border px-4 py-2">N</td>
          <td className="border px-4 py-2">%</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">0%</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">20,41%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Entre 0,01% y 0,99%</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">42,18%</td>
        </tr>
 
        <tr>
        <td className="border px-4 py-2">1% y mas</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">8,16%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Sin datos de Planta total para calculo del 1%</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">29,25%</td>
        </tr>
        <tr>
        <td className="border px-4 py-2">Total</td>
          <td className="border px-4 py-2"></td>
          <td className="border px-4 py-2">100%</td>
        </tr>
       <p>
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
    <table className="table-auto">
      <thead>
        <br/>
      </thead>
      <tbody>
      <tr> <td className="border px-4 py-2">Modalidad de contratación</td> <td className="border px-4 py-2">N</td> <td className="border px-4 py-2">%</td> </tr> <tr> <td className="border px-4 py-2">Contrato de planta permanente</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">10,25%</td> </tr> <tr> <td className="border px-4 py-2">Contrato de planta temporaria</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">11,31%</td> </tr> <tr> <td className="border px-4 py-2">Contrato modalidades previstas en la ley marco</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">49,82%</td> </tr> <tr> <td className="border px-4 py-2">Contrato otras modalidades</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">16,60%</td> </tr> <tr> <td className="border px-4 py-2">Contrato régimen de locación de obra</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">4,95%</td> </tr> <tr> <td className="border px-4 py-2">Contrato régimen de locación de servicios Decreto n° 1,109/17</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">7,07%</td> </tr> <tr> <td className="border px-4 py-2">Total</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">%</td> </tr>
       <p>
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