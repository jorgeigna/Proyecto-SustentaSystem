import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import css from "../css/logcss.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
class Logp extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link class="nav-link" to="/">
                  SustentaWeb
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link class="nav-link" to="/encuest">
                    Encuestas
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link class="nav-link" to="/about">
                    Sobre Nosotros
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link class="nav-link" to="/faq">
                    FAQ
                  </Link>
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link eventKey={2}>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <section id="logform">
          <main>
            <form>
              <h1 className="h3 mb-3 fw-normal">Ingrese sus datos</h1>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                ></input>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                ></input>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div>
                <p style={{ float: "left" }}>si no tienes cuenta &nbsp;</p>
                <p>
                  <Link to="/registro/pag1"> registrate</Link>
                </p>
              </div>
              <Link to="/">
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Sign in
                </button>
              </Link>
            </form>
          </main>
        </section>
      </Fragment>
    );
  }
}

export default Logp;
