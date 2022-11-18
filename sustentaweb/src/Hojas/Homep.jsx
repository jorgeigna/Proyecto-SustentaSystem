import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import firstimage from "../images/firstimage.jpg";
import companyimage from "../images/companyplaceholder.jpg";
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
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://drive.google.com/uc?export=view&id=1PLQLsDnLTAG2GtUaRVcDyyZzhgYvi7DV"
                alt="Second slide"
                style={{ height: 400 }}
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
                style={{ height: 400 }}
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <form className="imgcontainer">
          <h1 className="tittleimg">experiencia de nuestros usuarios</h1>
          <img src={companyimage} className="compimg" alt="companyimage" />
          <div>
            <h3 style={{}}>lorem ipsum</h3>
            <h7>lorem imsum lorem</h7>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Homep;
