import React, { Component, Fragment } from "react";
import AuthService from "../Services/auth.service";
import { withRouter } from "../common/with-router";

import Form from "react-bootstrap/Form";
var resp1 = 0;
var resp2 = 0;
var resp3 = 0;
var resp4 = 0;
var resp5 = 0;
var resp6 = 0;
var resp7 = 0;
var resp8 = 0;
var resp9 = 0;
var resp10 = 0;
var punt = 0;
var Lvl = 0;
class Regencu extends Component {
  constructor(props) {
    super(props);
    this.authclick = this.authclick.bind(this);
    this.onChangerp1 = this.onChangerp1.bind(this);
    this.onChangerp2 = this.onChangerp2.bind(this);
    this.onChangerp3 = this.onChangerp3.bind(this);
    this.onChangerp4 = this.onChangerp4.bind(this);
    this.onChangerp5 = this.onChangerp5.bind(this);
    this.onChangerp6 = this.onChangerp6.bind(this);
    this.onChangerp7 = this.onChangerp7.bind(this);
    this.onChangerp8 = this.onChangerp8.bind(this);
    this.onChangerp9 = this.onChangerp9.bind(this);
    this.onChangerp10 = this.onChangerp10.bind(this);
    this.calcLV = this.calcLV.bind(this);
    this.calcPnt = this.calcPnt.bind(this);
    this.print = this.print.bind(this);
    this.setdt = this.setdt.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.regusuario = this.regusuario.bind(this);
    this.regcararact = this.regcararact.bind(this);
    this.regresp = this.regresp.bind(this);
    this.state = {
      encompl: false,
      linklav: { pointerEvents: "none" },
      successful: { display: "none" },
      message: "",
    };
  }

  calcPnt() {
    let rp1as = [0, 33, 66, 100];
    let rp2as = [0, 33, 66, 100];
    let rp3as = [0, 33, 66, 100];
    let rp4as = [0, 33, 66, 100];
    let rp5as = [0, 33, 66, 100];
    let rp6as = [0, 33, 66, 100];
    let rp7as = [0, 33, 66, 100];
    let rp8as = [0, 33, 66, 100];
    let rp9as = [0, 33, 66, 100];
    let rp10as = [0, 33, 66, 100];
    punt = parseInt(
      rp1as[parseInt(resp1)] * 0.1 +
        rp2as[parseInt(resp2)] * 0.1 +
        rp3as[parseInt(resp3)] * 0.1 +
        rp4as[parseInt(resp4)] * 0.1 +
        rp5as[parseInt(resp5)] * 0.1 +
        rp6as[parseInt(resp6)] * 0.1 +
        rp7as[parseInt(resp7)] * 0.1 +
        rp8as[parseInt(resp8)] * 0.1 +
        rp9as[parseInt(resp9)] * 0.1 +
        rp10as[parseInt(resp10)] * 0.1
    );
  }
  calcLV() {
    if (punt >= 75) {
      Lvl = 3;
    }
    if (punt <= 75) {
      Lvl = 2;
    }
    if (punt <= 50) {
      Lvl = 1;
    }
    if (punt <= 25) {
      Lvl = 0;
    }
  }
  print() {
    let dat = JSON.parse(localStorage.getItem("data"));
    console.log(dat);
    console.log(typeof dat);
    console.log(dat.Nombre);
    console.log(dat.Contraseña);
  }
  regusuario() {
    this.calcPnt();
    this.calcLV();
    this.setdt();

    let dat = JSON.parse(localStorage.getItem("data"));

    this.setState({
      message: "",
      successful: { display: "none" },
    });
    AuthService.register(dat.Nombre, dat.Correo, dat.Contraseña).then(
      (response) => {
        this.regcararact();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
        this.setState({
          successful: { display: "" },
          message: resMessage,
        });
      }
    );
  }
  regcararact() {
    let dat = JSON.parse(localStorage.getItem("data"));

    this.setState({
      message: "",
      successful: { display: "none" },
    });
    AuthService.registercarac(
      dat.Correo,
      dat.Apellido,
      dat.NombreOrganizacion,
      dat.Area,
      dat.ExtraArea,
      dat.AñoForm,
      dat.Telefono,
      dat.Pais,
      dat.Region,
      dat.Comuna,
      parseInt(dat.NFiscal),
      parseInt(dat.MontoFact),
      parseFloat(dat.divisa),
      dat.PagWeb,
      dat.Redes,
      dat.compacc,
      dat.numwork,
      dat.pfem,
      dat.itype,
      dat.indextra,
      dat.accomr,
      dat.certf,
      dat.cerfextra,
      dat.motiv,
      dat.alcan,
      dat.Lvl
    ).then(
      (response) => {
        this.regresp();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
        this.setState({
          successful: { display: "" },
          message: resMessage,
        });
      }
    );
  }
  regresp() {
    let dat = JSON.parse(localStorage.getItem("data"));
    this.setState({
      message: "",
      successful: false,
    });
    AuthService.registresp(
      dat.Correo,
      resp1,
      resp2,
      resp3,
      resp4,
      resp5,
      resp6,
      resp7,
      resp8,
      resp9,
      resp10
    ).then(
      (response) => {
        this.props.router.navigate("/registro/resu");
        window.location.reload();
        localStorage.setItem("lvl", Lvl);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
        this.setState({
          successful: { display: "" },
          message: resMessage,
        });
      }
    );
  }
  buttonHandler(e) {
    e.preventDefault();
    this.regusuario();
  }
  authclick() {
    if (
      resp1 &&
      resp2 &&
      resp3 &&
      resp4 &&
      resp5 &&
      resp6 &&
      resp7 &&
      resp8 &&
      resp9 &&
      resp10
    ) {
      this.setState({
        linklav: { pointerEvents: "" },
        encompl: true,
      });
    } else {
      this.setState({
        linklav: { pointerEvents: "none" },
        encompl: false,
      });
    }
  }
  onChangerp1(e) {
    resp1 = e.target.value;
    this.authclick();
  }
  onChangerp2(e) {
    resp2 = e.target.value;
    this.authclick();
  }
  onChangerp3(e) {
    resp3 = e.target.value;
    this.authclick();
  }
  onChangerp4(e) {
    resp4 = e.target.value;
    this.authclick();
  }
  onChangerp5(e) {
    resp5 = e.target.value;
    this.authclick();
  }
  onChangerp6(e) {
    resp6 = e.target.value;
    this.authclick();
  }
  onChangerp7(e) {
    resp7 = e.target.value;
    this.authclick();
  }
  onChangerp8(e) {
    resp8 = e.target.value;
    this.authclick();
  }
  onChangerp9(e) {
    resp9 = e.target.value;
    this.authclick();
  }
  onChangerp10(e) {
    resp10 = e.target.value;
    this.authclick();
  }
  setdt() {
    let dts = JSON.parse(localStorage.getItem("data"));
    dts.Level = Lvl;
    localStorage.setItem("data", JSON.stringify(dts));
  }

  render() {
    return (
      <Fragment>
        <section id="Emcuesta">
          <Form>
            <h1>Encuesta de Conocimiento y Nivelación</h1>
            <h5>
              para conocer que producto necesita solicitamos completar esta
              encuesta, solicitamos completar con sinceridad para determinar
              correctamente que nivel de conocimiento posee sobre la
              sustentabilidad
            </h5>
            <p style={{ fontWeight: "bolder" }}>¿Conoce que es un ODS?</p>
            <div onChange={this.onChangerp1}>
              <input type="radio" name="resp1" id="rp1p1" value={0} />
              <label htmlFor="rp1p1">&nbsp;no conozco que es</label>
              <br />
              <input type="radio" name="resp1" id="rp2p1" value={1} />
              <label htmlFor="rp2p1">&nbsp;conozoco que es</label>
              <br />
              <input type="radio" name="resp1" id="rp3p1" value={2} />
              <label htmlFor="rp3p1">
                &nbsp;conozco que es y tengo planes de implementarla
              </label>
              <br></br>
              <input type="radio" name="resp1" id="rp4p1" value={3} />
              <label htmlFor="rp4p1">
                {" "}
                &nbsp;conozco que es y se estan implementando en la empresa
              </label>
              <br />
              <br />
            </div>
            <div onChange={this.onChangerp2}>
              <p style={{ fontWeight: "bolder" }}>
                ¿conoce que es la economia circular?
              </p>
              <input type="radio" name="resp2" id="rp1p2" value={0} />
              <label htmlFor="rp1p2">
                &nbsp;no conozco nada de economia circular
              </label>
              <br></br>

              <input type="radio" name="resp2" id="rp2p2" value={1} />
              <label htmlFor="rp2p2">
                &nbsp;he escuchado sobre economia circular pero no lo domino
              </label>
              <br></br>

              <input type="radio" name="resp2" id={2} value={2} />
              <label htmlFor="rp3p2">
                &nbsp;conozco que es la economia circular y planeo integrarla a mi empresa
              </label>
              <br></br>

              <input type="radio" name="resp2" id="rp4p2" value={3} />
              <label htmlFor="rp4p2">
                &nbsp;conozco la economia circular y tengo metas establecidas a cumplir
              </label>
              <br />
              <br />
            </div>
            <div onChange={this.onChangerp3}>
              <p style={{ fontWeight: "bolder" }}>
                ¿posee planes ambientales de aqui al 2030?
              </p>
              <input type="radio" name="resp3" id="rp1p3" value={0} />
              <label htmlFor="rp1p3">
                &nbsp;no tengo planes ambientales de aqui al 2030
              </label>
              <br></br>

              <input type="radio" name="resp3" id="rp2p3" value={1} />
              <label htmlFor="rp2p3">
                &nbsp;estoy planteando metas ambientales de aqui al 2030
              </label>
              <br></br>

              <input type="radio" name="resp3" id="rp3p3" value={2} />
              <label htmlFor="rp3p3">
                &nbsp;tengo metas propias establecidas de aqui al 2030
              </label>
              <br></br>

              <input type="radio" name="resp3" id="rp4p3" value={3} />
              <label htmlFor="rp4p3">
                &nbsp;tengo metas propias y requerimientos de certificados que cumplir de aqui al 2030
              </label>
            </div>
            <br />
            <div onChange={this.onChangerp4}>
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp4" id="rp1p4" value={0} />
              <label htmlFor="rp1p4">
                &nbsp;respuesta 1 de la preguna numero 4
              </label>
              <br></br>

              <input type="radio" name="resp4" id="rp2p4" value={1} />
              <label htmlFor="rp2p4">
                &nbsp;respuesta 2 de la preguna numero 4
              </label>
              <br></br>

              <input type="radio" name="resp4" id="rp3p4" value={2} />
              <label htmlFor="rp3p4">
                &nbsp;respuesta 3 de la preguna numero 4
              </label>
              <br></br>

              <input type="radio" name="resp4" id="rp4p4" value={3} />
              <label htmlFor="rp4p4">
                &nbsp;respuesta 4 de la preguna numero 4
              </label>
            </div>
            <div onChange={this.onChangerp5}>
              <br />
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp5" id="rp1p5" value={0} />
              <label htmlFor="rp1p5">
                &nbsp;respuesta 1 de la preguna numero 5
              </label>
              <br></br>

              <input type="radio" name="resp5" id="rp2p5" value={1} />
              <label htmlFor="rp2p5">
                &nbsp;respuesta 2 de la preguna numero 5
              </label>
              <br></br>

              <input type="radio" name="resp5" id="rp3p5" value={2} />
              <label htmlFor="rp3p5">
                &nbsp;respuesta 3 de la preguna numero 5
              </label>
              <br></br>

              <input type="radio" name="resp5" id="rp4p5" value={3} />
              <label htmlFor="rp4p5">
                &nbsp;respuesta 4 de la preguna numero 5
              </label>
            </div>
            <div onChange={this.onChangerp6}>
              <br />
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp6" id="rp1p6" value={0} />
              <label htmlFor="rp1p6">
                &nbsp;respuesta 1 de la preguna numero 6
              </label>
              <br></br>

              <input type="radio" name="resp6" id="rp2p6" value={1} />
              <label htmlFor="rp2p6">
                &nbsp;respuesta 2 de la preguna numero 6
              </label>
              <br></br>

              <input type="radio" name="resp6" id="rp3p6" value={2} />
              <label htmlFor="rp3p6">
                &nbsp;respuesta 3 de la preguna numero 6
              </label>
              <br></br>

              <input type="radio" name="resp6" id="rp4p6" value={3} />
              <label htmlFor="rp4p6">
                &nbsp;respuesta 4 de la preguna numero 6
              </label>
            </div>
            <div onChange={this.onChangerp7}>
              <br />
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp7" id="rp1p7" value={0} />
              <label htmlFor="rp1p7">
                &nbsp;respuesta 1 de la preguna numero 7
              </label>
              <br></br>

              <input type="radio" name="resp7" id="rp2p7" value={1} />
              <label htmlFor="rp2p7">
                &nbsp;respuesta 2 de la preguna numero 7
              </label>
              <br></br>

              <input type="radio" name="resp7" id="rp3p7" value={2} />
              <label htmlFor="rp3p7">
                &nbsp;respuesta 3 de la preguna numero 7
              </label>
              <br></br>

              <input type="radio" name="resp7" id="rp4p7" value={3} />
              <label htmlFor="rp4p7">
                &nbsp;respuesta 4 de la preguna numero 7
              </label>
            </div>
            <div onChange={this.onChangerp8}>
              <br />
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp8" id="rp1p8" value={0} />
              <label htmlFor="rp1p8">
                &nbsp;respuesta 1 de la preguna numero 8
              </label>
              <br></br>

              <input type="radio" name="resp8" id="rp2p8" value={1} />
              <label htmlFor="rp2p8">
                &nbsp;respuesta 2 de la preguna numero 8
              </label>
              <br></br>

              <input type="radio" name="resp8" id="rp3p8" value={2} />
              <label htmlFor="rp3p8">
                &nbsp;respuesta 3 de la preguna numero 8
              </label>
              <br></br>

              <input type="radio" name="resp8" id="rp4p8" value={3} />
              <label htmlFor="rp4p8">
                &nbsp;respuesta 4 de la preguna numero 8
              </label>
            </div>
            <div onChange={this.onChangerp9}>
              <br />
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp9" id="rp1p9" value={0} />
              <label htmlFor="rp1p9">
                &nbsp;respuesta 1 de la preguna numero 9
              </label>
              <br></br>

              <input type="radio" name="resp9" id="rp2p9" value={1} />
              <label htmlFor="rp2p9">
                &nbsp;respuesta 2 de la preguna numero 9
              </label>
              <br></br>

              <input type="radio" name="resp9" id="rp3p9" value={2} />
              <label htmlFor="rp3p9">
                &nbsp;respuesta 3 de la preguna numero 9
              </label>
              <br></br>

              <input type="radio" name="resp9" id="rp4p9" value={3} />
              <label htmlFor="rp4p9">
                &nbsp;respuesta 4 de la preguna numero 9
              </label>
            </div>
            <div onChange={this.onChangerp10}>
              <br />
              <p style={{ fontWeight: "bolder" }}>¿?</p>
              <input type="radio" name="resp10" id="rp1p10" value={0} />
              <label htmlFor="rp1p10">
                &nbsp;respuesta 1 de la preguna numero 10
              </label>
              <br></br>

              <input type="radio" name="resp10" id="rp2p10" value={1} />
              <label htmlFor="rp2p10">
                &nbsp;respuesta 2 de la preguna numero 10
              </label>
              <br></br>

              <input type="radio" name="resp10" id="rp3p10" value={2} />
              <label htmlFor="rp3p10">
                &nbsp;respuesta 3 de la preguna numero 10
              </label>
              <br></br>

              <input type="radio" name="resp10" id="rp4p10" value={3} />
              <label htmlFor="rp4p10">
                &nbsp;respuesta 4 de la preguna numero 10
              </label>
              <br />
              <br />
            </div>
            <input
              type="button"
              style={{ width: "80%", marginLeft: "5%", marginTop: "10px" }}
              className="btn btn-lg btn-block btn-light"
              onClick={this.buttonHandler}
              value="Continuar"
              disabled={!this.state.encompl}
            />
            <div className="form-group">
              <div
                style={this.state.successful}
                className={"alert alert-danger"}
                role="alert"
              >
                {this.state.message}
              </div>
            </div>
          </Form>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Regencu);
