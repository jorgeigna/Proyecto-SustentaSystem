import React, { Component, Fragment } from 'react'
import Hoja1 from './Hojas/hoja1'
import Test from './Hojas/test'
import Hoja2 from './Hojas/hoja2'
import Encabezado from './Hojas/enc'
import Hoja3 from './Hojas/hoja3'

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <Encabezado />
      <Hoja1 />
      

      </Fragment>
    )
  }
}
