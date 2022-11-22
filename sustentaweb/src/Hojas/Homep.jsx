import React, { Component, Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstimage from "../images/slide1.png";
import secondimage from "../images/slide2.jpg"
import companyimage from "../images/companyplaceholder.jpg";
import thirdunage from "../images/slide3.png"
class Homep extends Component {
  render() {
    return (
      <Fragment>
        <div className="carrouselcont">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={firstimage}
                alt="testimage"
                style={{ height: 400 }}
              />
              <Carousel.Caption>
                <h5 style={{fontWeight:"1000"}}>Cumple tus metas</h5>
                <p style={{fontWeight:"bold"}}>
                  Nuestra experiencia te ayudara a cumplirlas
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={secondimage}
                alt="Second slide"
                style={{ height: 400 }}
              />
              <Carousel.Caption>
                <h5 style={{fontWeight:"1000"}}>Nuestros productos</h5>
                <p style={{fontWeight:"bolder"}}>estan pensados para tus necesidades.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {thirdunage}
                alt="Third slide"
                style={{ height: 400 }}
              />
              <Carousel.Caption>
                <h5 style={{fontWeight:"1000"}}>Kairos</h5>
                <p style={{fontWeight:"bolder"}}>
                  es una empresa especializada en sustentabilidad 
                  lista para ayudar
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <form className="imgcontainer">
          <h1 className="tittleimg">experiencia de nuestros usuarios</h1>
          <img src={companyimage} className="compimg" alt="companyimage" />
          <div>
            <h3>Empresa de ejemplo</h3>
            <h6>"Kairos es una de las mejores empresas de consultoria que hemos contratado, partimos de no tener nada a tener una politica ambiental para cumplir con las metas de 2023"</h6>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Homep;
