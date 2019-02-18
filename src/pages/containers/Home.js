import React, {Component} from 'react'
import HomeLayout from './../components/LayoutHome'
import Header from './../components/Header'
import Marcas from './../components/Marcas'
import Footer from './../components/Footer'
import Modalcontainer from './../../widgets/containers/Modal'
import Modal from './../../widgets/components/Modal'
import RedesSociales from './../../widgets/components/RedesSociales'

class Home extends Component{
  state = {
    modalVisible: false,
    marca: ''
  }

  handleCloseModal = event => {
    this.setState({
      modalVisible: false
    })
  }
 
  handleOpenModal = (event, marca) => {
    //console.log(marca)
    this.setState({
      modalVisible: true,
      marca
    })
  }

  render(){
    return(
      <HomeLayout>
        {/* <Header /> */}
        <Marcas
          handleClick = {this.handleOpenModal} 
        />
        <Footer />
        { this.state.modalVisible &&
          <Modalcontainer>
            <Modal handleClick = {this.handleCloseModal} >
              <RedesSociales
                marca = {this.state.marca} 
              />
            </Modal>
          </Modalcontainer>
        }
      </HomeLayout>
    )
  }
}

export default Home