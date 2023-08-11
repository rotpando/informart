'use client'
import Link from "next/link";
import Image from 'next/image';
import { useThemeContext } from './Context/Theme'
import AnimatedDiv from './components/AnimatedDiv';

export default function Home() {
  const {lang, setLang} = useThemeContext();
  return (
    <main>
        <AnimatedDiv delay={0.3}>
          <div className="flex justify-center items-center">
          <Image className="text-current filter invert" src="/telescopio.svg" width={400} height={400} alt="InformARt" />
        </div>
        </AnimatedDiv>
        
        
          <h2 className='transition'>{lang === 'es' ? '¿Quiénes somos?' : 'About Us'}</h2>
          <p>{lang === 'es' ? 'El Observatorio de Monitoreo y Evaluación del Cumplimiento de la Ley de Cupo Laboral Trans es una red de personas trans y no binarias dedicada a garantizar la efectiva aplicación de la Ley 27.636, conocida como la Ley de Promoción del Acceso al Empleo Formal para personas Travestis, Transexuales y Transgénero `&quot;`Diana Sacayán-Lohana Berkins`&quot;`. Esta ley fue sancionada en Argentina en el año 2021 y establece que el sector público nacional debe reservar, al menos, el 1% de sus cargos y vacantes para personas travestis, transexuales y transgénero.  Nuestra labor se enfoca en monitorear la implementación del cupo en el sector público. Como parte de nuestro compromiso con la transparencia y la rendición de cuentas, publicamos informes regulares que elaboramos a partir de pedidos de acceso a la información pública. Estos informes brindan una visión clara y objetiva sobre el avance y los desafíos en la implementación del cupo laboral trans en el sector público, así como las áreas que requieren mayor atención para lograr una inclusión laboral plena y justa.  Nuestro objetivo es seguir ser una referencia ineludible en la evaluación del cumplimiento de los derechos de las personas trans y no binarias en Argentina, contribuyendo así a una sociedad más justa e inclusiva para todxs.' 
          : 'The Monitoring and Evaluation Observatory for Compliance with the Trans Employment Quota Law is a network of transgender and non-binary individuals dedicated to ensuring the effective implementation of Law 27.636, known as the Promotion of Access to Formal Employment for Transvestite, Transsexual, and Transgender Persons "Diana Sacayán-Lohana Berkins Law." This law was enacted in Argentina in the year 2021 and stipulates that the national public sector must reserve at least 1% of its positions and vacancies for transvestite, transsexual, and transgender individuals. Our work focuses on monitoring the implementation of the quota in the public sector. As part of our commitment to transparency and accountability, we regularly publish reports that we compile from requests for public information access. These reports provide a clear and objective overview of the progress and challenges in the implementation of the trans employment quota in the public sector, as well as the areas that require greater attention to achieve full and fair employment inclusion. Our goal is to continue being an essential reference in the evaluation of compliance with the rights of transgender and non-binary individuals in Argentina, thereby contributing to a more just and inclusive society for all.'}</p>
        
          
          <h2>{lang === 'es' ? '¿Qué hacemos?' : 'What do we do?'} </h2>
        <ul>
            <li>
            {lang === 'es' ? 'Defendemos activamente la ley de cupo laboral trans y abogamos por su ampliación y mejora, asegurándonos de que sea una herramienta efectiva para promover la igualdad de oportunidades en el trabajo y la erradicación de la discriminación por identidad de género.' 
            : 'We actively defend the trans employment quota law and advocate for its expansion and improvement, ensuring that it is an effective tool for promoting equal opportunities in the workplace and eradicating discrimination based on gender identity. '} 
            </li>
            <li>
            {lang === 'es' ? 'Mediante pedidos regulares de acceso a la información pública, monitoreamos el cumplimiento de las políticas y acciones de empleo inclusivo implementadas por el sector público para garantizar el acceso equitativo y no discriminatorio de personas trans y no binarias.' 
            : 'Through regular requests for access to public information, we monitor the compliance of inclusive employment policies and actions implemented by the public sector to ensure equitable and non-discriminatory access for transgender and non-binary individuals. '} 
            </li>
            <li>
            {lang === 'es' ? 'Producimos informes periódicos que contienen información detallada y exhaustiva sobre la implementación de la ley de cupo en el sector público.' : 'We produce periodic reports containing detailed and comprehensive information about the implementation of the quota law in the public sector. '}
            </li>
            <li>
            {lang === 'es' ? 'Verificamos la precisión y veracidad de la información difundida en los medios de comunicación respecto de la implementación de la Ley de Cupo Laboral Trans.' : 'We verify the accuracy and truthfulness of information disseminated in the media regarding the implementation of the Trans Employment Quota Law.'}
            </li>
        </ul>

          <h2>{lang === 'es' ? 'Misión' : 'Mission'}</h2>
          <ul>
          
            <li>{lang === 'es' ? 'A través del análisis crítico y riguroso, buscamos identificar y denunciar las injusticias laborales' : 'Through critical and rigorous analysis, we aim to identify and denounce labor injustices.'}</li>
            <li>{lang === 'es' ? 'Promovemos la organización y la movilización de lxs trabajadorxs para defender sus derechos' : 'We advocate for the organization and mobilization of workers to defend their rights.'}</li>
            <li>{lang === 'es' ? 'Buscamos la aplicación efectiva de los mismos y conquistar mejoras en sus condiciones laborales' : 'We strive for the effective implementation of these rights and the achievement of improvements in their working conditions.'}</li>
        </ul>
          
    
    
          <h2>{lang === 'es' ? 'Vision' : 'Vision'}</h2>
        <ol>
            <li>{lang === 'es' ? 'Buscamos una sociedad en la que los medios de producción estén en manos de la clase trabajadora, se hayan abolido las desigualdades sociales y se haya instaurado una democracia genuina en todos los aspectos de la vida, incluido el ámbito laboral.' : 'We seek a society where the means of production are in the hands of the working class, where social inequalities have been abolished, and where genuine democracy is established in all aspects of life, including the realm of labor.'}</li>
            <li>{lang === 'es' ? 'Trabajamos para fortalecer la conciencia de clase entre lxs trabajadorxs y para que sean protagonistas de su propia liberación.' : 'We work to strengthen class consciousness among workers and empower them to be the protagonists of their own liberation.'}</li>
        </ol>
    
        <h2>{lang === 'es' ? 'Valores' : 'Values'}</h2>
        <ol>
            
            <li>{lang === 'es' ? 'Conciencia de clase' : 'Class consciousness'}</li>
            <li>{lang === 'es' ? 'Solidaridad internacional' : 'International solidarity'}</li>
            <li>{lang === 'es' ? 'Anti asimilacionismo' : 'Anti-assimilationism'}</li>
            <li>{lang === 'es' ? 'Antiracismo' : 'Anti-racism'}</li>
            <li>{lang === 'es' ? 'Antipunitivismo' : 'Anti-punitivism'}</li>
            <li>{lang === 'es' ? 'Justicia' : 'Justice'}</li>
            <li>{lang === 'es' ? 'Independencia' : 'Independence'}</li>
            <li>{lang === 'es' ? 'Transparencia' : 'Transparency'}</li>
        </ol>
    
        <h2>{lang === 'es' ? '¿Cómo apoyar esta causa?' : 'How to support our cause?'}</h2>

<p>{lang === 'es' ? 'Tus aportes son fundamentales para impulsar una inclusión laboral justa y equitativa para las personas trans y no binarias en el sector público. Cada contribución que recibimos nos permite fortalecer nuestra labor de investigación, seguimiento y defensa de los derechos laborales de la comunidad trans.' : 'Your contributions are essential to drive fair and equitable labor inclusion for transgender and non-binary individuals in the public sector. Each contribution we receive enables us to strengthen our work of research, monitoring, and advocacy for the labor rights of the transgender community.'}</p>
<Link href="/donar">{lang === 'es' ? 'Dona aqui' : 'Donate here'}</Link>
    
          
         
        </main>

  );
}