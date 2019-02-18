import React from 'react'
import './RedesSociales.css'
import { RedesAguilaMaya, 
         RedesPresumiendoMexico, 
         RedesPurifika, 
         RedesRadioRanchito,
        RedesTelemetrika, 
        RedesUltraAcoustics, 
        RedesUltraNoticias, 
        RedesUrbanismoPositivo } from './../../const/helpers'
import RedSocial from './RedSocial'

const RedesSociales = props => {
  let nombreMarca = ''
  switch (props.marca) {
    case 'Águila Maya':
      nombreMarca = RedesAguilaMaya
      break
    case 'Presumiendo México':
      nombreMarca = RedesPresumiendoMexico
      break
    case 'Purifika':
      nombreMarca = RedesPurifika
      break
    case 'Radio Ranchito':
      nombreMarca = RedesRadioRanchito
      break
    case 'Telemetrika':
      nombreMarca = RedesTelemetrika
      break
    case 'Ultra Acoustics':
      nombreMarca = RedesUltraAcoustics
      break
    case 'Ultra Noticias':
      nombreMarca = RedesUltraNoticias
      break
    case 'Urbanismo Positivo':
      nombreMarca = RedesUrbanismoPositivo
      break
    default:
      break
  }
  return(
    <div className="RedesSociales">
      <div className="row">
        <h3>{props.marca}</h3>
        <RedSocial 
          redSocial = {nombreMarca}
        />
      </div>
    </div>
  )
}

export default RedesSociales