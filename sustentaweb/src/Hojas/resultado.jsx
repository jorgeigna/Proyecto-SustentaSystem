import React, { Component, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";


export default class Resultado extends Component {
  render() {
    return (
      <Fragment>
        <section id="Formulario">
          <Form>
            <Link to = "/">
            <button>Terminar</button></Link>
          </Form>
        </section>
      </Fragment>
    );
  }
}
