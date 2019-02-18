import React from 'react'
import imagenPrueba1 from './../../img/logos/prueba1.jpg'
import imagenPrueba2 from './../../img/logos/prueba2.jpg'
import './QuienesSomos.css'

const QuienesSomos = props => {
  return (
    <div className="quienes-somos">
      <div className="row">
        
        <div className="col s12 wrap-quienes-somos">     
          <div className="cont-img">
            <div className="helper-img">
              <img className='img-primaria' src={imagenPrueba1} alt="quienes somos"/>
              <img className='img-secundaria' src={imagenPrueba2} alt="quienes somos"/>
            </div>
          </div>
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos un corporativo diversificado en varias unidades de negocio, que a lo largo de 15 años de experiencia en el mercado 
            de la comunicación y la generación de contenido para medios audio visuales , hemos crecido y nos hemos consolidado como 
            una empresa confiable, que evoluciona gracias a la innovación y la creatividad. Creemos que la pasión por transformar y 
            el anhelo de compartir, nos permitirán crear la empresa y el país que soñamos.
          </p>
          <p>
            Ultra México nace a partir de Ultra Telecom, una empresa familiar fundada en los años 60's que nos dio las herramientas y 
            las bases para ser el corporativo que somos hoy en día. "Si hemos llegado lejos, es porque estamos parados en hombros de 
            gigantes" Isaac Newton.
          </p>
        </div>
        
        <div className="col s12 m6 wrap-mision">
          <div className="cont-img">
            <div className="helper-img">
              <img className='img-primaria' src={imagenPrueba1} alt="quienes somos"/>
              <img className='img-secundaria' src={imagenPrueba2} alt="quienes somos"/>
            </div>
          </div>
          <h2>Misión</h2>
          <p>
            Generar valor significativo y trascendente a través de la innovación, en todas las unidades de negocio que integran nuestro grupo, 
            bajo el principio de amor y pasión por México.
          </p>
        </div>
        
        <div className="col s12 m6 wrap-vision">
          <div className="cont-img">
            <div className="helper-img">
              <img className='img-primaria' src={imagenPrueba1} alt="quienes somos"/>
              <img className='img-secundaria' src={imagenPrueba2} alt="quienes somos"/>
            </div>
          </div>
          <h2>Visión</h2>
          <p>
            Nuestro motor:
            Maximixar nuestra generación de valor significativo y trascendente, formando parte de la economía creativa. 
            "Ojalá nuestra tecnología nunca deje atrás nuestra filosofía. Ojalá nuestro poder nunca supere nuestra compasión. 
            Y que el motor del cambio, no sea el miedo, sino el amor" Edmond Kirsch.
            Nuestra fuerza: 
            Colaboradores: Ser un gran equipo multidisciplinario formado por talentos comprometidos con el sueño de crear, 
            compartir y transformar para generar valor.
            Clientes y proveedores: Tener relaciones comerciales que se basen en la confianza, el comercio justo, la sustentabilidad 
            y los valores compartidos.
          </p>
        </div>

        <div className="col s12 titulo-valores">
          <h2>Valores</h2>
        </div>

        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">favorite</i></div>
          <p>Amor por México</p>
        </div>
        <div className="col s6 m4 wrap-valores">
        <div className="icon-valor"><i className="material-icons medium">whatshot</i></div>
          <p>Pasión por la gente buena de México</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">sentiment_very_satisfied</i></div>
          <p>Capacidad de soñar</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">pan_tool</i></div>
          <p>Creer como la base para hacer que nuestro trabajo diario contribuya</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">supervisor_account</i></div>
          <p>Colaboración, porque la suma de talentos multiplica el resultado</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">record_voice_over</i></div>
          <p>Liderazgo sencillo y honesto</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">lightbulb_outline</i></div>
          <p>Innovación que busque el bien común</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">directions_run</i></div>
          <p>Diversión, piedra angular de la vida</p>
        </div>
        <div className="col s6 m4 wrap-valores">
          <div className="icon-valor"><i className="material-icons medium">swap_horiz</i></div>
          <p>Equilibrio en nuestra vida y en todo lo que hagamos</p>
        </div>


     
       
      </div>
    </div>
  )
}

export default QuienesSomos