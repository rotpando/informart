"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const ComponenteReact: React.FC = () => {
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
  const data2 = [
    { name: "0%", value: 20.41 },
    { name: "Between 0.01% and 0.99%", value: 42.18 },
    { name: "1% and above", value: 8.16 },
    { name: "No total plant data", value: 29.25 },
];

  const data3 = [
    { name: "Permanent employment contract", value: 10.25 },
    { name: "Temporary employment contract", value: 11.313 },
    { name: "Contract modalities provided by law", value: 49.82 },
    { name: "Other contract modalities", value: 16.60 },
    { name: "Work contracting regime", value: 4.95 },
    { name: "Service contracting regime", value: 7.07 },
];
  
  return (
    <>
    <h2>March 2022 Report</h2> <p> Law No. 27,636, for the Promotion of Access to Formal Employment for Transsexual and Transgender People Diana Sacayán-Lohana Berkins was sanctioned in June 2021 and established that the Argentine State must employ, in a proportion not less than 1% of the totality of its staff, job positions for transsexual and transgender people, in all modalities of regular contracting in force. A period of two years was set, counted from June 24, 2021, to comply with these obligations and a Unique Registry of Applicants was created to receive applications. </p> <p> To comply with the Law, by June 2023 there should be 4,553 transsexual and/or transgender people working in the Public Administration. </p> <h2> As of March 31, 2022 the data shows that: </h2>
    <ol className="list-decimal">
    <li className="mb-2">5,085 transsexual and/or transgender people registered in the unique applicant registry
</li>
<li className="mb-2">293 transsexual and/or transgender people currently work in the National Executive Power, centralized and decentralized agencies</li>

<li className="mb-2">8.6% of the State agencies fully comply with the quota policy, 20.41% do not comply with it at all and 29.25% have not responded regarding compliance with the Law.</li>
<li className="mb-2">10.25% of the transsexual and/or transgender people currently working in the public administration do so as permanent staff; 11.31% as temporary staff; 49.82% under hiring modalities provided by the general public employment law; 16.60% under other modalities; 4.95% under contract regime of work contracting; and 7.07% under contract regime of services contracting decree N°1,109/17.</li>
    </ol>

    <table className="table-auto">
      <thead>
        <br/>
      </thead>
      <tbody>
      <tr> <td className="border px-4 py-2">Compliance status by organization</td> <td className="border px-4 py-2">N</td> <td className="border px-4 py-2">%</td> </tr> <tr> <td className="border px-4 py-2">0%</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">20.41%</td> </tr> <tr> <td className="border px-4 py-2">Between 0.01% and 0.99%</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">42.18%</td> </tr> <tr> <td className="border px-4 py-2">1% and above</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">8.16%</td> </tr> <tr> <td className="border px-4 py-2">No total plant data for 1% calculation</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">29.25%</td> </tr> <tr> <td className="border px-4 py-2">Total</td> <td className="border px-4 py-2"></td> <td className="border px-4 py-2">100%</td> </tr>
      </tbody>
    </table>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <PieChart width={400} height={400}>
      <Pie
        data={data2}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data2.map((entry, index) => (
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
      <td className="border px-4 py-2">Employment modality</td>
      <td className="border px-4 py-2">N</td>
      <td className="border px-4 py-2">%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Permanent employment contract</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">10.25%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Temporary employment contract</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">11.31%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Contract modalities provided by the framework law</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">49.82%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Other contract modalities</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">16.60%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Work contracting regime</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">4.95%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Service contracting regime Decree No. 1,109/17</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">7.07%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Total</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2">%</td>
    </tr>
    <p></p>
  </tbody>
</table>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<PieChart width={400} height={400}>
      <Pie
        data={data3}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data3.map((entry, index) => (
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