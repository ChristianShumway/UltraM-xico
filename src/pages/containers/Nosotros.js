import React, { Component } from 'react'
import LayoutNosotros from './../components/LayoutNosotros'
import QuienesSomos from './../components/QuienesSomos'
import Footer from './../components/Footer'

class Nosotros extends Component{
  render(){
    return(
      <LayoutNosotros>
        <QuienesSomos />
        <Footer />
      </LayoutNosotros>
    )
  }
}

export default Nosotros