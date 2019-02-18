import React from 'react'

const RedSocial = props =>{
  console.log(props.redSocial)
  return(
    <div className="col s12 red-social">
      {
        props.redSocial.map( red => {
          const {nombre,link,icono} = red
          return(
            <a href={link} className="link-red-social" key={red.id}>
              <img className="icono-red-social" src={icono} alt={nombre}/>
              <span className="nombre-red-social">{nombre}</span>
            </a>
          )
        })
      }
    </div>
    
  )
}

export default RedSocial