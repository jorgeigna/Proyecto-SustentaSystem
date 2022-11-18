import React, { Component, Fragment } from 'react'
import FormReg1 from './Hojas/formReg1'
import Formreg2 from './Hojas/formreg2'
import Regencu from './Hojas/regencu'
import Logp from './Hojas/Logp'
import Homep from './Hojas/Homep'
import { Route, Routes } from 'react-router-dom'
import Faq from './Hojas/faq'
import About from './Hojas/about'
import Encuestas from './Hojas/encuestas'
import Resultado from './Hojas/resultado'
import "./css/app.css"
export default class App extends Component {
  render() {
    return (
      <Fragment>
 
        <Routes>
      <Route path="/" exact element={<Homep />}/>
      <Route path='/login' element={<Logp/>}/>
      <Route path='/registro/pag1' element={<FormReg1/>}/>
      <Route path='/registro/pag2'element={<Formreg2/>} />
      <Route path='/registro/enc'element={<Regencu/>}/>
      <Route path='/registro/resu'element={<Resultado/>}/>
      <Route path='/encuest'element={<Encuestas/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/faq'element={<Faq/>}/>
        </Routes>
        <footer className='me-auto' bg="dark" variant="dark">
          <h1>pepito</h1>
        </footer>
        
      </Fragment>
    )
  }
}
