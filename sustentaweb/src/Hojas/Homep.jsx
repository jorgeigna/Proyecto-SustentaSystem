import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

class Homep extends Component {
    render() {
        return (
            <Fragment>
        <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link className ="nav-link" to = "/">SustentaWeb</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link className ="nav-link" to = "/">Home</Link></Nav.Link>
            <Nav.Link ><Link className ="nav-link" to = "/encuest">Encuestas</Link></Nav.Link>
            <Nav.Link ><Link className ="nav-link" to = "/about">Sobre Nosotros</Link></Nav.Link>
            <Nav.Link ><Link className ="nav-link" to = "/faq">FAQ</Link></Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link eventKey={2}>
              <Link to = "/login" className='nav-link'>Login</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>      
      <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://drive.google.com/uc?export=view&id=1PLQLsDnLTAG2GtUaRVcDyyZzhgYvi7DV"
          alt="testimage"
          style={ {height:400,}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://drive.google.com/uc?export=view&id=1PLQLsDnLTAG2GtUaRVcDyyZzhgYvi7DV"
          alt="Second slide"
          style={ {height:400,}}
          
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://drive.google.com/uc?export=view&id=1PLQLsDnLTAG2GtUaRVcDyyZzhgYvi7DV"
          alt="Third slide"
          style={ {height:400,}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                    <br />
            <div style={{}}>

                <h1>experiencia de nuestros usuarios</h1>
                <div style={{float:"left" }}>
                <img src="http://drive.google.com/uc?export=view&id=1PLQLsDnLTAG2GtUaRVcDyyZzhgYvi7DV" alt="testimg" />
                </div>
                <div>
                <h3 style={{}}>lorem ipsum</h3>
                <h7>lorem imsum lorem</h7>
                 </div>
            </div>

            
            </Fragment>  
            
        );
    }
}

export default Homep;