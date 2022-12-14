import React, { Component, Fragment } from "react";
import FormReg1 from "./Hojas/formReg1";
import Formreg2 from "./Hojas/formreg2";
import Regencu from "./Hojas/regencu";
import Logp from "./Hojas/Logp";
import Homep from "./Hojas/Homep";
import { Route, Routes } from "react-router-dom";
import Faq from "./Hojas/faq";
import About from "./Hojas/about";
import Encuestas from "./Hojas/encuestas";
import Resultado from "./Hojas/resultado";
import "./css/app.css";
import AuthService from "./Services/auth.service.js";
import EventBus from "./common/EventBus";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import initFontAwesome from "../src/common/initFontAwesome";
/*pagina app que carga las paginas y contiene las partes basicas que comparten todas las paginas */
//llamado del inicio de las librerias fontawesome
initFontAwesome();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    //funcion que obtiene la sesion actual si existe para cambiar el usuario activo y hablitar la pestaña de encuestas
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
    //funcion encargada de quitar al usuario activo al salir de la pagina
    EventBus.remove("logout");
  }
  logOut() {
    //funcion de cierre de sesion

    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  }
  render() {
    const { currentUser } = this.state;

    return (
      <Fragment>
        <div
          className="min-vh-100 d-flex flex-column 
                justify-content-between"
        >
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link className="nav-link" to="/">
                    Sustenta System
                  </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link className="nav-link" to="/">
                      Inicio
                    </Link>
                  </Nav.Link>
                  {currentUser ? (
                    <Nav.Link>
                      <Link className="nav-link" to="/encuest">
                        Encuestas
                      </Link>
                    </Nav.Link>
                  ) : (
                    <Nav></Nav>
                  )}
                  <Nav.Link>
                    <Link className="nav-link" to="/about">
                      Conocenos
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="nav-link" to="/faq">
                      Preguntas Frecuentes
                    </Link>
                  </Nav.Link>
                </Nav>

                {currentUser ? (
                  <Nav>
                    <Nav.Link className="nav-link">
                      <Link className="nav-link">{currentUser.username}</Link>
                    </Nav.Link>
                    <Nav.Link eventKey={2}>
                      <Link to="/" onClick={this.logOut} className="nav-link">
                        Cerrar Sesion
                      </Link>
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav>
                    <Nav.Link eventKey={2}>
                      <Link to={"/login"} className="nav-link">
                        Iniciar Sesion
                      </Link>
                    </Nav.Link>
                  </Nav>
                )}
              </Container>
            </Navbar>
          </header>
          <Routes>
            <Route path="/" exact element={<Homep />} />
            <Route path="/login" element={<Logp />} />
            <Route path="/registro/pag1" element={<FormReg1 />} />
            <Route path="/registro/pag2" element={<Formreg2 />} />
            <Route path="/registro/enc" element={<Regencu />} />
            <Route path="/registro/resu" element={<Resultado />} />
            <Route path="/encuest" element={<Encuestas />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <footer className="bg-dark text-center text-white" id="footermain">
            <div className="navbar-fixed-bottom">
              <section className="mb-4">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //Colocar link de la red social correspondiente
                  href=" "
                  target={"_blank"}
                  rel="noreferrer"
                  role="button"
                >
                  {" "}
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //Colocar link de la red social correspondiente
                  href=" "
                  target={"_blank"}
                  rel="noreferrer"
                  role="button"
                >
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //Colocar link de la red social correspondiente
                  href=" "
                  target={"_blank"}
                  rel="noreferrer"
                  role="button"
                >
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //Colocar link de la red social correspondiente
                  href=" "
                  target={"_blank"}
                  rel="noreferrer"
                  role="button"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //Colocar link de la red social correspondiente
                  href=" "
                  target={"_blank"}
                  rel="noreferrer"
                  role="button"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  //Colocar link de la red social correspondiente
                  href=" "
                  target={"_blank"}
                  rel="noreferrer"
                  role="button"
                >
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </a>
              </section>
            </div>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              Sustenta System © 2021:
              <a
                className="text-white"
                // Ingresar pagina web aqui
                href=" "
                rel="noreferrer"
                target={"_blank"}
              >
                SustentaSystem.com
              </a>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
}
