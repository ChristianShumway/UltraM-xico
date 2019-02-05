import React, {Component} from 'react'
import HomeLayout from './../components/LayoutHome'
import Header from './../components/Header'
import Marcas from './../components/Marcas'
import Footer from './../components/Footer'

class Home extends Component{
  render(){
    return(
      <HomeLayout>
        <Header />
        <Marcas />
        <Footer />
      </HomeLayout>
    )
  }
}

export default Home