import React, { Component, Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstimage from "../images/slide1.png";
import secondimage from "../images/slide2.jpg";
import companyimage from "../images/companyplaceholder.jpg";
import thirdunage from "../images/slide3.png";
class Homep extends Component {
  /*pagina home de la aplicacion */
  render() {
    return (
      <Fragment>
        <div className="carrouselcont">
          <Carousel variant="light">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={firstimage}
                alt="testimage"
                style={{ height: 400, filter:"brightness(60%)" }}
              />
              <Carousel.Caption className="caption58">
                <h5 style={{ fontWeight: "1000" }}>Cumple tus metas</h5>
                <p style={{ fontWeight: "bold" }}>
                  Nuestra experiencia te ayudara a cumplirlas
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={secondimage}
                alt="Second slide"
                style={{ height: 400, filter:"brightness(60%)" }}
              />
              <Carousel.Caption>
                <h5 style={{ fontWeight: "1000" }}>Nuestros productos</h5>
                <p style={{ fontWeight: "bolder" }}>
                Están pensados para tus necesidades
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block54 w-100"
                src={thirdunage}
                alt="Third slide"
                style={{ height: 400, filter:"brightness(80%)"}}
              />
              <Carousel.Caption>
                <h5 style={{ fontWeight: "1000" }}></h5>
                <p style={{ fontWeight: "bolder" }}>
                
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <form className="imgcontainer">
          <h1 className="tittleimg">Experiencia de nuestros usuarios</h1>
          <img src={companyimage} className="compimg" alt="companyimage" />
          <div>
            <h3>Empresa de ejemplo</h3>
            <h6 className="textusuarios">
              "Es una de las mejores empresas de consultoria que hemos
              contratado, partimos de no tener nada a tener una politica
              ambiental para cumplir con las metas de 2023"
            </h6>
          </div>
        </form>

        <br />
        <br />
        <br />
      
        <br />
        <br />
      </Fragment>
    );
  }
}

export default Homep;
