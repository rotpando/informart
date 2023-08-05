import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
   
        <main className={styles.main}>
          <h1>InformARt</h1>
          <h2>Misión:</h2>
          <ul>
            <li>A través del análisis crítico y riguroso, buscamos identificar y denunciar las injusticias laborales</li>
            <li>Promovemos la organización y la movilización de lxs trabajadorxs para defender sus derechos</li>
            <li>Buscamos la aplicación efectiva de los mismos y conquistar mejoras en sus condiciones laborales</li>
        </ul>
          
    
    
          <h2>Visión:</h2>
        <ol>
            <li>Buscamos una sociedad en la que los medios de producción estén en manos de la clase trabajadora, se hayan abolido las desigualdades sociales y se haya instaurado una democracia genuina en todos los aspectos de la vida, incluido el ámbito laboral.</li>
            <li>Trabajamos para fortalecer la conciencia de clase entre lxs trabajadorxs y para que sean protagonistas de su propia liberación.</li>
        </ol>
    
        <h2>Valores:</h2>
        <ul>
            <li>Conciencia de clase</li>
            <li>Solidaridad internacional</li>
            <li>Anti asimilacionismo</li>
            <li>Antiracismo</li>
            <li>Antipunitivismo (esto lo pondría por los antecedentes penales que muchas veces no se cumple el cupo por este punto)</li>
        </ul>
    
        <ol>
            <li>Justicia</li>
            <li>Independencia</li>
            <li>Transparencia</li>
        </ol>
    
    
    
          
         
        </main>
      )
    }
    
    

