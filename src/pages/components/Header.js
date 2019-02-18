import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from './../../img/logo.png'
import backgroundCdMx from './../../img/fondoultramexico.jpg'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class Header extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    }

    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.sidenav')
      var instance = M.Sidenav.init(elems, options)
      instance.open()
    })
  
  }

  render(){
    return(
      <div className="Header">
        
        <div className="row">
          <div className="col s12 background-header">
            <img src={logo} alt="Ultra México"/>
          </div>
        </div>
    
        <nav className="container-nav">
          <div className="nav-wrapper">
            <div className="col s12">
              <NavLink exact to="/" className="brand-logo"><img src={logo} alt="Ultra México"/></NavLink>
              <ul className="right hide-on-med-and-down">
                <li><NavLink  activeClassName="selected" className="item-menu" exact to="/">Marcas</NavLink></li>
                <li><NavLink  activeClassName="selected" className="item-menu" to="/nosotros">Nosotros</NavLink></li>
                <li><NavLink  activeClassName="selected" className="item-menu" to="/contactanos">Contacto</NavLink></li>
                <li><NavLink  activeClassName="selected" className="item-menu" to="/atendimos">¿Cómo te atendimos?</NavLink></li>
              </ul>
              {/* MENU MÓVIL */}
              <ul 
                ref={Sidenav => {this.Sidenav = Sidenav;}}
                id="slide-out"
                className="sidenav"
              >
                <li>
                  <div className="user-view">
                    <div className="background">
                      <img src={backgroundCdMx} alt="cd mx"/>
                    </div>
                    <a href="#user">
                      <img className='logo-um-movil' src={logo} alt="logo ultra méxico"/>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#!"><i className="material-icons">work</i>Marcas</a>
                </li>
                <li>
                  <a href="#!"><i className="material-icons">supervisor_account</i>Nosotros</a>
                </li>
                <li><div className="divider" /></li>
                <li>
                  <a href="#!"><i className="material-icons">record_voice_over</i>Contacto</a>
                </li>
                <li>
                  <a href="#!"><i className="material-icons">sentiment_very_satisfied</i>¿Cómo te Atendimos?</a>
                </li>
              </ul>
              <a href="#!" data-target="slide-out" className="sidenav-trigger button-collapse">
                <i className="material-icons">menu</i>
              </a>  
              {/* END MENÚ MOVIL */}
            </div>
          </div>
        </nav>

      </div> 
    )
  }
}

export default Header