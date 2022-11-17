import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default class About extends Component {
  render() {
    return (
      <Fragment>
                    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link class ="nav-link" to = "/">SustentaWeb</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link class ="nav-link" to = "/">Home</Link></Nav.Link>
            <Nav.Link ><Link class ="nav-link" to = "/encuest">Encuestas</Link></Nav.Link>
            <Nav.Link ><Link class ="nav-link" to = "/about">Sobre Nosotros</Link></Nav.Link>
            <Nav.Link ><Link class ="nav-link" to = "/faq">FAQ</Link></Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link eventKey={2}>
              <Link to = "/login" className='nav-link'>Login</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
      </Fragment>
    )
  }
}
