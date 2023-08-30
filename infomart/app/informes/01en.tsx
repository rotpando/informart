"use client"
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const ComponenteReact: React.FC = () => {
  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];
  const data = [
    { name: "Permanent staff contract", value: 169 },
    { name: "Temporary staff contract", value: 81 },
    { name: "Contract modalities provided for in the framework law", value: 280 },
    { name: "Other contract modalities", value: 122 },
    { name: "Contract regime for service hiring decree N 1,109/7", value: 33},
    { name: "Without disaggregated data by type of hiring", value: 17},
    ];
    
    const data1 = [
    { name: "0%", value: 33 },
    { name: "0.01% to 0.5%", value: 73 },
    { name: "1% or more", value: 20 },
    { name: "No data", value: 16 },
    ];
  
  return (
    <>
    <h2>May 2023 Report</h2>
<p>
Law No. 27,636, for the Promotion of Access to Formal Employment for Transvestite, Transsexual and Transgender People Diana Sacayán-Lohana Berkins, was enacted in June 2021 and established that the Argentine State must employ, in a proportion no less than 1% of the total staff, job positions for transvestite, transsexual and transgender people, in all modalities of regular hiring in force. A deadline of two years was set, counted from 24/6/2021, to comply with these obligations and a Unique Registry of Applicants was created to receive applications.
</p>
<p>
To comply with the Law, as of June 2023 there should be 4,553 transvestite, transsexual and/or transgender people working in the Public Administration.
</p>
<h2>
As of May 29, 2023 the data show that:
</h2>
<ol className="list-decimal">
<li className="mb-2">7,748 transvestite, transsexual and/or transgender people registered in the unique registry of applicants</li>
<li className="mb-2">709 transvestite, transsexual and/or transgender people currently work in the National Executive Branch, centralized and decentralized agencies</li>
<li className="mb-2">11% of the state agencies fully comply with the quota policy, 22% do not comply with it at all and 5.3% have not responded regarding compliance with the Law.</li>
<li className="mb-2">23.84% of transvestite, transsexual and/or transgender people currently working in the public administration do so on a permanent staff basis; 11.42% as temporary staff; 39.49% under contract modalities provided for by the framework law; 17.21% under other modalities; 0.99% under contract regime for service hiring decree N°1,109/17; and 2.4% without disaggregated data by type of hiring.</li>
</ol>

<table className="table-auto">
  <thead>
    <br/>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">AGENCY QUOTA COMPLIANCE STATUS</td> 
      <td className="border px-4 py-2">N</td>
      <td className="border px-4 py-2">%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">0%</td>
      <td className="border px-4 py-2">33</td> 
      <td className="border px-4 py-2">22.00%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">Between 0.01% and 0.5%</td>
      <td className="border px-4 py-2">73</td>
      <td className="border px-4 py-2">48.67%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">Between 0.50% and 0.99%</td>
      <td className="border px-4 py-2">20</td>
      <td className="border px-4 py-2">13.33%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">1% or more</td>
      <td className="border px-4 py-2">16</td>
      <td className="border px-4 py-2">10.67%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">No staffing data for quota calculation</td> 
      <td className="border px-4 py-2">8</td>
      <td className="border px-4 py-2">5.33%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">Total</td>
      <td className="border px-4 py-2">150</td>
      <td className="border px-4 py-2">100%</td>
    </tr>
   <p>Data elaborated from information provided by the Subsecretary of Diversity of MMGYD on the Seventh Implementation Report of Law 27636
</p> </tbody> </table>

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

    <table className="table-auto">
  <thead>
    <br/>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Type of Contract</td>
      <td className="border px-4 py-2">N</td> 
      <td className="border px-4 py-2">%</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Permanent staff contract</td>
      <td className="border px-4 py-2">169</td>
      <td className="border px-4 py-2">23.84%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">Temporary staff contract</td>
      <td className="border px-4 py-2">81</td>
      <td className="border px-4 py-2">11.42%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">Contract modalities provided for in the framework law</td>
      <td className="border px-4 py-2">280</td>
      <td className="border px-4 py-2">39.49%</td>
    </tr>
    
    <tr>
    <td className="border px-4 py-2">Other contract modalities</td>
      <td className="border px-4 py-2">122</td> 
      <td className="border px-4 py-2">17.21%</td>
    </tr>
    <tr>
    <td className="border px-4 py-2">Contract regime for service hiring decree N 1,109/7</td>
      <td className="border px-4 py-2">33</td>
      <td className="border px-4 py-2">4.65%</td>
    </tr>
    
    <tr>
    <td className="border px-4 py-2">Without disaggregated data by type of hiring</td>
      <td className="border px-4 py-2">17</td>
      <td className="border px-4 py-2">2.40%</td>
    </tr> 
    <tr>
    <td className="border px-4 py-2">Total</td>
      <td className="border px-4 py-2">709</td>
      <td className="border px-4 py-2">100%</td>
    </tr>
   
   <p>Data elaborated from information provided by the Subsecretary of Diversity of MMGYD on the Seventh Implementation Report of Law 27636
</p> </tbody> </table>
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