import React, { Component, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default class Resultado extends Component {
  render() {
    return (
      <Fragment>
        <section id="resuform">
          <Form>
            <h1>Resultado</h1>
            <h5>
              En base a las respuestas proporcionadas, su nivel es XX, para
              determinar que puntos debería de apoyar en su empresa en base a la
              sustentabilidad lo invitamos a completar pequeñas las encuestas de
              cada tema en la pestaña encuestas
            </h5>
            <Link to="/">
              <button>Terminar</button>
            </Link>
          </Form>
        </section>
      </Fragment>
    );
  }
}
