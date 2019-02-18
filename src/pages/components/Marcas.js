import React from 'react'
import { MarcasExistentes } from './../../const/helpers'
import './Marcas.css'


const Marcas = (props) => {
  return(
    <div className="row wrap-marcas">
      {
        MarcasExistentes.map( marca => {
          return(
            <div className="col center-align s6 m4 l3 wrap-item-marca" key={marca.id}>
              <div className="item-marca">
                <a onClick={ e => props.handleClick(e, marca.nombre)}><img src={marca.logo} alt={marca.nombre}/></a>
              </div>
              <p className='nombre-marca'>{marca.nombre}</p>
            </div>
          )
        })
      }
      

    </div>
  )
  
}

export default Marcas