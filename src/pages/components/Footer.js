import React from 'react'
import './Footer.css'

const Header = props =>{
  return(
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Ultra México</h5>
            <p className="grey-text text-lighten-4">
              Somos un corporativo diversificado en varias unidades de negocio, 
              que a lo largo de 15 años de experiencia en el mercado de la comunicación 
              y la generación de contenido para medios audio visuales.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Redes Sociales</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Copyright © 2019. Todos los derechos reservados
          <a className="grey-text text-lighten-4 right">José Vasconcelos 184, Col. Condesa, C.P. 06140, Del. Cuahutémoc México, D.F</a>
          <a className="grey-text text-lighten-4 right">José Vasconcelos 184, Col. Condesa, C.P. 06140, Del. Cuahutémoc México, D.F</a>
        </div>
      </div>
    </footer>
  )
}

export default Header