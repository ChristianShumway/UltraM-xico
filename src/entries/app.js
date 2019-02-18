import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Home from './../pages/containers/Home'
import Nosotros from './../pages/containers/Nosotros'
import Header from './../pages/components/Header'
import { BrowserRouter, Route } from 'react-router-dom'

const container = document.getElementById('container')
render(
  <BrowserRouter> 
    <Fragment>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact extrict path='/nosotros' component={Nosotros} />
    </Fragment> 
  </BrowserRouter>
, container )