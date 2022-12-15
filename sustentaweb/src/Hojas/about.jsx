import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import im1 from "../images/im1.png";
import im2 from "../images/im2.png";
import im3 from "../images/im3.png";
import im4 from "../images/im4.png";
import im5 from "../images/im5.png";
import im6 from "../images/im6.png";
import im7 from "../images/im7.png";
import im8 from "../images/im8.png";
import im9 from "../images/im9.png";
import im10 from "../images/im10.png";
import im11 from "../images/im11.png";
import im13 from "../images/im12.png";
import im12 from "../images/im13.png";
import im14 from "../images/im14.png";
export default class About extends Component {
  /*pagina sobre nosotros de la aplicacion*/
  render() {
    return (
      <Fragment>
        <div className="abfrag">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="display-4">Nosotros</h1>
                <p className="lead text-muted mb-0">
                  Somos una empresa con más de 10 años de experiencia, dinámica
                  y optimista que nace en pro de suplir soluciones que potencien
                  el buen desempeño de los negocios, adaptando nuestros
                  productos y servicios a los cambios del mercado, necesidades
                  del planeta y la sociedad. Estamos agradecidos de la confianza
                  puesta en nosotros, durante estos años hemos apoyado a
                  empresas del sector de retail, banca comercial, alimentos,
                  laboratorios, servicios de salud, línea aérea, licores,
                  supermercados, telecomunicaciones, hotelería, construcción y
                  otros.
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="abfrag2">
          <div className="container py-5">
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-2 order-lg-1">
                <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h1 className="font-weight-light">NUESTRO PROPÓSITO</h1>
                <p className="font-italic text-muted mb-4">
                  Gestionar proyectos de cambio organizacional y programas de
                  capacitación dirigidos al talento humano que respondan y
                  sustentan la orientación estratégica de nuestros clientes, con
                  el cuido del bienestar de sus colaboradores, brindando a
                  quienes confían en nosotros, todos los elementos necesarios
                  para lograr los máximos beneficios en el desarrollo de su
                  gente y de su organización y la sociedad.
                </p>
              </div>
              <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 px-5 mx-auto">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                  alt=""
                  className="img-fluid mb-4 mb-lg-0"
                />
              </div>
              <div className="col-lg-6">
                <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">¿DÓNDE OPERAMOS?</h2>
                <p className="font-italic text-muted mb-4">
                  Hemos ejecutados proyectos en Colombia, Estados Unidos,
                  República Dominicana, Curazao, Panamá, Venezuela y Chile.
                  Junto a nuestros Consultores y Coaches certificados, las
                  organizaciones han logrado identificar la mejor manera de
                  enfrentar sus actuales desafíos. Los equipos de trabajo han
                  logrado alcanzar los objetivos sin dejar a un lado sus
                  necesidades de hacerse cada vez más profesionales y humanos
                  bajo la filosofía de liderazgo congruente y responsable.
                </p>

                <Link
                  to="/registro/pag1"
                  className="btn btn-light px-5 rounded-pill shadow-sm"
                >
                  Registrate
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="abfrag3">
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-5">
                <h2 className="display-5 font-weight-light" >EQUIPO</h2>
              </div>
            </div>

            <div className="row ">
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4 ">
                  <div className="text-center">
                  <img
                    src={im1}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm "
                  />
                  </div>
                  
                  <h5 className="mb-0">Danelli Jiménez</h5>
                  <span className="small text-muted">
                    Ama el café y el deporte, especialista en sustentabilidad y triple impacto
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                    </li>
                  </ul>
                </div>

                
              </div>


              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                <div className="text-center">
                  <img
                      src={im4}
                      alt=""
                      width="100"
                      className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                </div>
                  
                  <h5 className="mb-0">Yumey Acevedo</h5>
                  <span className="small text-muted">
                    Canta y cocina estupendo, especialista en virtualización de contenido, una maga del elearning
                  </span>
                  <ul className="social mb-0 list-inline mt-3 ">
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />{" "}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <div className="text-center">
                  <img
                      src={im5}
                      alt=""
                      width="100"
                      className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                  </div>
                  <h5 className="mb-0">Daniel Jiménez</h5>
                  <span className="small  text-muted">
                    Aficionado al deporte al aire libre, especialista en el área comercial y proyectos sustentables
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />{" "}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <div className="text-center">
                  <img
                    src={im5}
                    alt=""
                    width="100"
                    style={{filter:"brightness(10000%)"}}
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  </div>
                  <h5 className="mb-0">Catherinne Herrera</h5>
                  <span className="small text-muted">
                    Vive la vida de manera olísta e integral, especialista en economía circular y desarrollo sustentable
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />{" "}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#" className="social-link">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
      </Fragment>
    );
  }
}
