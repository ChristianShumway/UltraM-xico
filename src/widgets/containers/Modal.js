import React, { Component } from 'react'
import { createPortal } from 'react-dom'

class Modalcontainer extends Component{
  render() {
    const modalContainer = document.getElementById('modal-container')
    return(
      createPortal( this.props.children, modalContainer )
    )
  }
}

export default Modalcontainer