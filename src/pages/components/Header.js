import React from 'react'
import './Header.css'
import logo from './../../img/logo.png'

const Header = props =>{
  return(
    <nav className="container-nav">
      <div className="nav-wrapper">
        <div className="col s12">
          <a href="/" className="brand-logo"><img src={logo} alt="Ultra México"/></a>
          <ul className="right hide-on-med-and-down">
            <li><a className="item-menu" href="components.html">Marcas</a></li>
            <li><a className="item-menu" href="components.html">Nosotros</a></li>
            <li><a className="item-menu" href="components.html">Contacto</a></li>
            <li><a className="item-menu">¿Cómo te atendimos?</a></li>
          </ul>
          <ul id="nav-mobile" className="side-nav">
            <li><a>Getting started</a></li>
            <li><a href="components.html">Components</a></li>
            <li><a href="components.html">Components</a></li>
            <li><a href="components.html">Components</a></li>
          </ul>
          <a className="button-collapse" href="#" data-activates="nav-mobile">
            <i className="material-icons">view_headline</i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header