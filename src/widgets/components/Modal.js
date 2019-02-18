import React from 'react'
import './Modal.css'
import closeModal from './../../img/logos/cancel.png'

const Modal = props =>{
  return(
    <div className="Modal">
        {props.children}
        <a 
          className="close-modal"
          onClick={props.handleClick}
        >
          <img className="img-close-modal" src={closeModal} alt="cerrar modal"/>
        </a>
    </div>
  )
}

export default Modal