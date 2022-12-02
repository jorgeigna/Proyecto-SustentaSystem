import React, { Component, Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import nivel0 from "../images/nivel0.png";
import nivel1 from "../images/nivel1.png";
import nivel2 from "../images/nivel2.png";
import nivel3 from "../images/nivel3.png";
import AuthService from "../Services/auth.service";

export default class Resultado extends Component {
  componentDidMount() {
    //funcion que obtioene los datos de correo y usuario para mostrar al cliente su nivel, si es 0 se envia un correo a kairos para realizar una capaciotacion al usuario
    var desimg = JSON.parse(localStorage.getItem("lvl"));
    var textc = document.getElementById("compl");
    var imgc = document.getElementById("contdiv");

    if (desimg === 1) {
      const imgl = document.createElement("img");
      imgl.src = nivel1;
      imgl.alt = "nivel1";
      imgc.appendChild(imgl);
      const texth = document.createElement("h5");
      localStorage.removeItem("lvl");
      localStorage.removeItem("data");

      texth.innerHTML =
        "Encontramos que su nivel es suficiente para empezar la construcción de medidas para su empresa, por lo que lo invitamos a contestar las encuestas de nivel uno que se han habilitado para usted, a medida que se avance con las medidas avanzaremos en la creación de políticas a su medida.";
      textc.appendChild(texth);
    }
    if (desimg === 2) {
      const imgl = document.createElement("img");
      imgl.src = nivel2;
      imgl.alt = "nivel2";
      imgc.appendChild(imgl);
      const texth = document.createElement("h5");
      texth.innerHTML =
        "Encontramos que su nivel es adecuado para definir los ODS y plantear la política sustentable que llevara su empresa, por favor lo invitamos a contestar las encuestas disponibles en la pestaña encuestas para definir una política a su medida.";
      textc.appendChild(texth);
      localStorage.removeItem("lvl");
      localStorage.removeItem("data");
    }
    if (desimg === 3) {
      const imgl = document.createElement("img");
      imgl.src = nivel3;
      imgl.alt = "nivel2";
      imgc.appendChild(imgl);
      const texth = document.createElement("h5");
      texth.innerHTML =
        "Encontramos que su empresa está preparada para integrar políticas ambientales avanzadas y dar el paso final en la legalización de las mismas, lo invitamos a contestar las encuestas disponibles para evaluar las políticas que ya tiene establecidas.";
      textc.appendChild(texth);
      localStorage.removeItem("lvl");
      localStorage.removeItem("data");
    }
    if (desimg === 0) {
      const imgl = document.createElement("img");
      imgl.src = nivel0;
      imgl.alt = "nivel2 contdiv";
      imgc.appendChild(imgl);

      const texth = document.createElement("h5");
      texth.innerHTML =
        "Su nivel es muy bajo para ofrecerle productos a su medida, en su lugar le ofrecemos una capacitación en la cual se le enseñaran los conceptos que encontramos esenciales para un correcto desarrollo sustentable, Kairos se contactara con usted en los siguientes días para confirmar y coordinar las reuniones para capacitación.";
      textc.appendChild(texth);
      this.minlvl();
    }
  }
  minlvl() {
    //funcion que envia el correo en caso de obtener el nivel mas bajo
    const uname = JSON.parse(localStorage.getItem("data")).Nombre;
    const ucorreo = JSON.parse(localStorage.getItem("data")).Correo;
    const mensaje =
      "el usuario " +
      uname +
      " de correo " +
      ucorreo +
      " ha calificado para el nivel mas bajo";
    AuthService.sendmail(mensaje).then(
      (response) => {
        console.log(response.data);
        localStorage.removeItem("lvl");
        localStorage.removeItem("data");
      },

      (err) => {
        console.log(err.response.data);
      }
    );
  }
  render() {
    return (
      <Fragment>
        <section id="resuform" onLoad={this.componentDidMount}>
          <Form>
            <h1>Resultado</h1>
            <h5>
              En base a las respuestas proporcionadas, su nivel es &nbsp;
              {JSON.parse(localStorage.getItem("lvl"))}
            </h5>
            <br />
            <br />
            <div id="contdiv"></div>
            <br />
            <br />
            <div id="compl"></div>
            <Link to="/">
              <button className="w-100 mt-3 btn btn-lg btn-block btn-light ">
                Terminar
              </button>
            </Link>
          </Form>
        </section>
      </Fragment>
    );
  }
}
