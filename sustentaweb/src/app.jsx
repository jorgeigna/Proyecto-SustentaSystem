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
import AuthService from "./Services/auth.service.js";
import EventBus from "./common/EventBus";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }
  componentWillUnmount() {
    EventBus.remove("logout");
  }
  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  }
  render() {
    const { currentUser } = this.state;

    return (
      <Fragment>
 <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link className="nav-link" to="/">
                  SustentaWeb
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/encuest">
                    Encuestas
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/about">
                    Sobre Nosotros
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </Nav.Link>
              </Nav>

   
              {currentUser ? (

              <Nav>
              <Nav.Link className="nav-link">
              <Link className="nav-link" >{currentUser.username}</Link>
              </Nav.Link >
              <Nav.Link eventKey={2}>
              <Link to="/" onClick={this.logOut} className="nav-link">
                  LogOut
                  </Link>
                </Nav.Link>
              </Nav>

          ) : (

           
            <Nav>
              <Nav.Link eventKey={2}>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
                </Nav.Link>
                </Nav>
           
          )}

            </Container>
          </Navbar>
        </header>
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
