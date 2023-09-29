'use client'
import React from "react";
import { useThemeContext } from '../Context/Theme'
const Donar = () => {
  const themeContext = useThemeContext();

  const { lang, setLang } = themeContext;
  
  return <main>
    
    <br/>
    <br/>
    <h2>{lang === 'es' ? 'Como ayudarnos' : 'How to support us'}</h2>
  <p>{lang === 'es' ? 'Como organización hemos decidido ser independientes y no recibir recursos estatales que puedan limitar nuestro libre accionar.' : 'As an organization, we have decided to remain independent and not accept state resources that could limit our free actions.'}</p>
  <p>{lang === 'es' ? 'Por eso es fundamental para financiar nuestro trabajo recibir donaciones de quienes apoyan nuestra lucha.' : 'Thats why receiving donations from those who support our cause is essential to fund our work.'}</p>
  <h2>{lang === 'es' ? 'Podés donar por MercadoPago' : 'You can donate through MercadoPago'}</h2>
  
  <h3><a href="http://mpago.la/1qqowGv">{lang === 'es' ? 'Dona $1000' : 'Donate AR$1000'}</a></h3>
  <h3><a href="http://mpago.la/1ow9W2P">{lang === 'es' ? 'Dona $3000' : 'Donate AR$3000'}</a></h3>
<h2>{lang === 'es' ? 'Podés donar via PayPal:' : 'You can donate through Paypal'}</h2>
  
  <h3><a href="https://www.paypal.com/donate/?business=TJYUJ3K69S3XC&no_recurring=0&item_name=InformARt.+Trans%2C+queer+and+nb+observatory.+Support+our+work.&currency_code=USD">{lang === 'es' ? 'Dona el monto que quieras, una vez o mensualmente.' : "Donate whatever amount you'd like, once or on a monthly basis."}</a></h3>
  </main>;
};

export default Donar;