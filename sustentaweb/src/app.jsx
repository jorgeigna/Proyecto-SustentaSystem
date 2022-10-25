import React, { Component, Fragment } from 'react'
import Hoja1 from './Hojas/hoja1'
import Test from './Hojas/test'
import css from "./css/app.css"
import Hoja2 from './Hojas/hoja2'
import Encabezado from './Hojas/enc'

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <Encabezado />
      <Hoja2 />
      
      <Test />

      </Fragment>
    )
  }
}
