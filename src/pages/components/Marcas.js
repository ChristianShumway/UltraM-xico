import React from 'react'
import './Marcas.css'
import presumiendoMexico from './../../img/marcas/logo_presmex.png'
import telemetrika from './../../img/marcas/logo_telemetrika.png'
import urbanismoPositivo from './../../img/marcas/logo_urbanismopositivo.png'
import ultraAcoustics from './../../img/marcas/logo_ultraacoustics.png'
import radioRanchito from './../../img/marcas/logo_radioranchito.png'
import aguilaMaya from './../../img/marcas/logo_aguilamaya.png'
import armaIdeas from './../../img/marcas/logo_armaideas.png'

const Marcas = () => {
  return(
    <div className="row wrap-marcas">
      <div className="col center-align s6 m4 wrap-item-marca">
        <div className="item-marca">
          <a><img src={aguilaMaya} alt="Aguila Maya"/></a>
        </div>
      </div>
      <div className="col center-align s6 m4 wrap-item-marca">
        <div className="item-marca">
          <a><img src={armaIdeas} alt="Arma Ideas"/></a>
        </div>
      </div>
      <div className="col center-align s6 m4 wrap-item-marca">
        <div className="item-marca">
          <a><img src={presumiendoMexico} alt="Presumiendo México"/></a>
        </div>
      </div>
      <div className="col center-align s6 m4 wrap-item-marca">
        <div className="item-marca">
          <a><img src={radioRanchito} alt="Radio Ranchito"/></a>
        </div>
      </div>
      <div className="col center-align s6 m4 wrap-item-marca">
        <div className="item-marca">
          <a><img src={telemetrika} alt="Telemetrika"/></a>
        </div>
      </div>
      <div className="col center-align s6 m4 wrap-item-marca">
        <div className="item-marca">
          <a><img src={ultraAcoustics} alt="Ultra Acoustics"/></a>
        </div>
      </div>
      <div className="col center-align s12 wrap-item-marca">
        <div className="item-marca">
          <a><img src={urbanismoPositivo} alt="Urbanismo Positivo"/></a>
        </div>
      </div>
      
    </div>
  )
  
}

export default Marcas