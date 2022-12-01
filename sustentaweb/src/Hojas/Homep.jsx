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
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={firstimage}
                alt="testimage"
                style={{ height: 400 }}
              />
              <Carousel.Caption>
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
                style={{ height: 400 }}
              />
              <Carousel.Caption>
                <h5 style={{ fontWeight: "1000" }}>Nuestros productos</h5>
                <p style={{ fontWeight: "bolder" }}>
                  estan pensados para tus necesidades.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={thirdunage}
                alt="Third slide"
                style={{ height: 400 }}
              />
              <Carousel.Caption>
                <h5 style={{ fontWeight: "1000" }}>Kairos</h5>
                <p style={{ fontWeight: "bolder" }}>
                  es una empresa especializada en sustentabilidad lista para
                  ayudar
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
            <h6>
              "Kairos es una de las mejores empresas de consultoria que hemos
              contratado, partimos de no tener nada a tener una politica
              ambiental para cumplir con las metas de 2023"
            </h6>
          </div>
        </form>

        <br />
        <br />
        <br />
        <form className="ourcontainer">
          <strong style={{ fontSize: "30pt" }}>nuestros clientes</strong>
          <div className="row">
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen10-300x55.jpg"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen5.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen2.png"
                alt=""
              />

              <img
                className="imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2022/01/qhantatisustentable-300x296.png"
                alt=""
              />
                            <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/z-Destileria-Carupamp.png"
                alt=""
              />
                            <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Yarna-shop.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen3.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen7.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen6.jpg"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen4.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Imagen8.jpg"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/z-KKO-Real.png"
                alt=""
              />
              
            </div>

            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2022/01/Celeritech--300x78.jpg"
                alt=""
              />
              <img
                className="imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2022/01/Moneda-a-Granel-300x300.jpg"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/biotech-1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/caraota-digital-300x72.png"
                alt=""
              />
                            <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Garzon-300x138.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/savake-300x130.png"
                alt=""
              />


            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/yarabeth-1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Mundo-PC-1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/2m-ingenieria-1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/aserca-1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/amand-300x61.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Sondel-1.png"
                alt=""
              />

              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/salvador-300x83.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/vivax.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/abloy.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Banco-Caribe.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/behrens-pharma.png"
                alt=""
              />

              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/avabsalud.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/beco-viejo.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/cavececo-CLIENTE-300x58.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/blasam.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/centigom-300x136.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Datanalisis-300x78.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/kenco.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/LOGO-EMPLEATE-CLIENTE.png"
                alt=""
              />
                            <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/QuickPress.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Mercantinl.png"
                alt=""
              />

              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/morales-morales-asociados-300x60.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Rica-Internacional.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/vital-care.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/sun-300x55.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/ultimas-noticias.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/sanitas-300x139.gif"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/cadena-capriles-1.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/nsm-grupo-300x120.png"
                alt=""
              />
            </div>
            <div className="column">
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/nodus.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/z-the-VIP.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/ferretotal-300x138.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/Bimbo.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/z-Automercado-Plazas.png"
                alt=""
              />
              <img className = "imgcl"
                src="http://kairosgestionintegral.com/wp-content/uploads/2021/12/alpina.png"
                alt=""
              />
            <br />
            <br />
            </div>

          </div>
        </form>
        <br />
        <br />
      </Fragment>
    );
  }
}

export default Homep;
