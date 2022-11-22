import React, { Component, Fragment } from "react";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
var resp1 = "";
var resp2 = "";
var resp3 = "";
var resp4 = "";
var resp5 = "";
var resp6 = "";
var resp7 = "";
var resp8 = "";
var resp9 = "";
var resp10 = "";
var rps =[]

class Regencu extends Component {
  constructor(props) {
    super(props);
  this.authclick = this.authclick.bind(this)
  this.onChangerp1 = this.onChangerp1.bind(this)
  this.onChangerp2 = this.onChangerp2.bind(this)
  this.onChangerp3 = this.onChangerp3.bind(this)
  this.onChangerp4 = this.onChangerp4.bind(this)
  this.onChangerp5 = this.onChangerp5.bind(this)
  this.onChangerp6 = this.onChangerp6.bind(this)
  this.onChangerp7 = this.onChangerp7.bind(this)
  this.onChangerp8 = this.onChangerp8.bind(this)
  this.onChangerp9 = this.onChangerp9.bind(this)
  this.onChangerp10 = this.onChangerp10.bind(this)
  this.state = {
   encompl : false,
   linklav : { pointerEvents: "none" }
};
  }
  buttonHandler(){
    rps = [resp1,resp2,resp3,resp4,resp5,resp6,resp7,resp8,resp9,resp10]
    localStorage.setItem("encrp",JSON.stringify(rps))
  }
  authclick(){
    if(
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
    ){
      this.setState({
      linklav : { pointerEvents: "" },
      encompl : true,
    })

    }else{
      this.setState({
      linklav : { pointerEvents: "none" },
      encompl : false,
    })
    }
  }
  onChangerp1(e){
    resp1 = e.target.value
    this.authclick()
  }
  onChangerp2(e){
    resp2 = e.target.value
    this.authclick()
  }
  onChangerp3(e){
    resp3 = e.target.value
    this.authclick()
  }
  onChangerp4(e){
    resp4 = e.target.value
    this.authclick()
  }
  onChangerp5(e){
    resp5 = e.target.value
    this.authclick()
  }
  onChangerp6(e){
    resp6 = e.target.value
    this.authclick()
  }
  onChangerp7(e){
    resp7 = e.target.value
    this.authclick()
  }
  onChangerp8(e){
    resp8 = e.target.value
    this.authclick()
  }
  onChangerp9(e){
    resp9 = e.target.value
    this.authclick()
  }
  onChangerp10(e){
    resp10 = e.target.value
    this.authclick()
  }
  print(){
    rps = [resp1,resp2,resp3,resp4,resp5,resp6,resp7,resp8,resp9,resp10]
    console.log(rps)
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
            <p>pregunta 1</p>
            <div onChange={this.onChangerp1}>
              <input
                className="imputregenc"
                type="radio"
                name="resp1"
                id="rp1p1"
                value="1"
              />
              <label htmlFor="rp1p1">respuesta 1 de la preguna numero 1</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp1"
                id="rp2p1"
                value="2"
              />
              <label htmlFor="rp2p1">respuesta 2 de la preguna numero 1</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp1"
                id="rp3p1"
                value="3"
              />
              <label htmlFor="rp3p1">respuesta 3 de la preguna numero 1</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp1"
                id="rp4p1"
                value="4"
              />
              <label htmlFor="rp4p1">respuesta 4 de la preguna numero 1</label>
              <br />
              <br />
            </div>
            <div onChange={this.onChangerp2}>
              <p>pregunta 2</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp2"
                id="rp1p2"
                value="1"
              />
              <label htmlFor="rp1p2">respuesta 1 de la preguna numero 2</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp2"
                id="rp2p2"
                value="2"
              />
              <label htmlFor="rp2p2">respuesta 2 de la preguna numero 2</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp2"
                id="3"
                value="3"
              />
              <label htmlFor="rp3p2">respuesta 3 de la preguna numero 2</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp2"
                id="rp4p2"
                value="4"
              />
              <label htmlFor="rp4p2">respuesta 4 de la preguna numero 2</label>
              <br />
              <br />
            </div>
            <div onChange={this.onChangerp3}>
              <p>pregunta 3</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp3"
                id="rp1p3"
                value="1"
              />
              <label htmlFor="rp1p3">respuesta 1 de la preguna numero 3</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp3"
                id="rp2p3"
                value="2"
              />
              <label htmlFor="rp2p3">respuesta 2 de la preguna numero 3</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp3"
                id="rp3p3"
                value="3"
              />
              <label htmlFor="rp3p3">respuesta 3 de la preguna numero 3</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp3"
                id="rp4p3"
                value="4"
              />
              <label htmlFor="rp4p3">respuesta 4 de la preguna numero 3</label>
            </div>
            <div onChange={this.onChangerp4}>
              <p>pregunta 4</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp4"
                id="rp1p4"
                value="1"
              />
              <label htmlFor="rp1p4">respuesta 1 de la preguna numero 4</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp4"
                id="rp2p4"
                value="2"
              />
              <label htmlFor="rp2p4">respuesta 2 de la preguna numero 4</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp4"
                id="rp3p4"
                value="3"
              />
              <label htmlFor="rp3p4">respuesta 3 de la preguna numero 4</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp4"
                id="rp4p4"
                value="4"
              />
              <label htmlFor="rp4p4">respuesta 4 de la preguna numero 4</label>
            </div>
            <div onChange={this.onChangerp5}>
              <p>pregunta 5</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp5"
                id="rp1p5"
                value="1"
              />
              <label htmlFor="rp1p5">respuesta 1 de la preguna numero 5</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp5"
                id="rp2p5"
                value="2"
              />
              <label htmlFor="rp2p5">respuesta 2 de la preguna numero 5</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp5"
                id="rp3p5"
                value="3"
              />
              <label htmlFor="rp3p5">respuesta 3 de la preguna numero 5</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp5"
                id="rp4p5"
                value="4"
              />
              <label htmlFor="rp4p5">respuesta 4 de la preguna numero 5</label>
            </div>
            <div onChange={this.onChangerp6}>
              <p>pregunta 6</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp6"
                id="rp1p6"
                value="1"
              />
              <label htmlFor="rp1p6">respuesta 1 de la preguna numero 6</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp6"
                id="rp2p6"
                value="2"
              />
              <label htmlFor="rp2p6">respuesta 2 de la preguna numero 6</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp6"
                id="rp3p6"
                value="3"
              />
              <label htmlFor="rp3p6">respuesta 3 de la preguna numero 6</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp6"
                id="rp4p6"
                value="4"
              />
              <label htmlFor="rp4p6">respuesta 4 de la preguna numero 6</label>
            </div>
            <div onChange={this.onChangerp7}>
              <p>pregunta 7</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp7"
                id="rp1p7"
                value="1"
              />
              <label htmlFor="rp1p7">respuesta 1 de la preguna numero 7</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp7"
                id="rp2p7"
                value="2"
              />
              <label htmlFor="rp2p7">respuesta 2 de la preguna numero 7</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp7"
                id="rp3p7"
                value="3"
              />
              <label htmlFor="rp3p7">respuesta 3 de la preguna numero 7</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp7"
                id="rp4p7"
                value="4"
              />
              <label htmlFor="rp4p7">respuesta 4 de la preguna numero 7</label>
            </div>
            <div onChange={this.onChangerp8}>
              <p>pregunta 8</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp8"
                id="rp1p8"
                value="1"
              />
              <label htmlFor="rp1p8">respuesta 1 de la preguna numero 8</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp8"
                id="rp2p8"
                value="2"
              />
              <label htmlFor="rp2p8">respuesta 2 de la preguna numero 8</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp8"
                id="rp3p8"
                value="3"
              />
              <label htmlFor="rp3p8">respuesta 3 de la preguna numero 8</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp8"
                id="rp4p8"
                value="4"
              />
              <label htmlFor="rp4p8">respuesta 4 de la preguna numero 8</label>
            </div>
            <div onChange={this.onChangerp9}>
              <p>pregunta 9</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp9"
                id="rp1p9"
                value="1"
              />
              <label htmlFor="rp1p9">respuesta 1 de la preguna numero 9</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp9"
                id="rp2p9"
                value="2"
              />
              <label htmlFor="rp2p9">respuesta 2 de la preguna numero 9</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp9"
                id="rp3p9"
                value="3"
              />
              <label htmlFor="rp3p9">respuesta 3 de la preguna numero 9</label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp9"
                id="rp4p9"
                value="4"
              />
              <label htmlFor="rp4p9">respuesta 4 de la preguna numero 9</label>
            </div>
            <div onChange={this.onChangerp10}>
              <p>pregunta 10</p>
              <input
                className="imputregenc"
                type="radio"
                name="resp10"
                id="rp1p10"
                value="1"
              />
              <label htmlFor="rp1p10">
                respuesta 1 de la preguna numero 10
              </label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp10"
                id="rp2p10"
                value="2"
              />
              <label htmlFor="rp2p10">
                respuesta 2 de la preguna numero 10
              </label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp10"
                id="rp3p10"
                value="3"
              />
              <label htmlFor="rp3p10">
                respuesta 3 de la preguna numero 10
              </label>
              <br></br>

              <input
                className="imputregenc"
                type="radio"
                name="resp10"
                id="rp4p10"
                value="4"
              />
              <label htmlFor="rp4p10">
                respuesta 4 de la preguna numero 10
              </label>
              <br />
              <br />
            </div>
            <input type="button" onClick={this.print} value="imprimir datos" />
            <Link to="/registro/resu" style={this.state.linklav}>
              <button className="btn btn-lg btn-block btn-light"
                style={{ width: "80%" }} disabled= {!this.state.encompl} onClick={this.buttonHandler}>continuar</button>
            </Link>
          </Form>
        </section>
      </Fragment>
    );
  }
}

export default Regencu;
