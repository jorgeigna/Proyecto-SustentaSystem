import React, { Fragment, Component } from "react";
import SeleccionAño from "../Component/SeleccionAño";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { withRouter } from "../common/with-router";

import {
  FormGroup,
  FormLabel,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Link } from "react-router-dom";
import { isEmail, isAlpha, isMobilePhone, isNumeric } from "validator";
import axios from "axios";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const isnumber = (value) => {
  if (!isNumeric(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Se deben ingresar solo numero!!!
      </div>
    );
  }
};
const notnumber = (value) => {
  if (!isAlpha(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        No se aceptan numeros!!!
      </div>
    );
  }
};
const estelefono = (value) => {
  if(!isMobilePhone(value)){
return(
  <div className="alert alert-danger" role="alert">
debe ser un numero de telefono!!!
  </div>
)
  }
}
class FormReg1 extends Component {


  authclik() {
    if (
      this.state.Pais &&
      this.state.Nombre &&
      this.state.Apellido &&
      this.state.Correo &&
      this.state.AñoForm &&
      this.state.MontoFact &&
      this.state.NombreOrganizacion &&
      this.state.Area &&
      this.state.Telefono &&
      this.state.AñoForm
    ) {
      this.setState({
        IsAllComplete: false,
        Nconfrm: { pointerEvents: "" },
      });
    } else {
      this.setState({
        IsAllComplete: true,
        Nconfrm: { pointerEvents: "none" },
      });
    }
  }

  componentDidMount() {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        this.setState({ countries: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  paisSeleccionado(pslec) {
    console.log(pslec);
    console.log(this.state);
  }
  compotro(aselec) {
    if (aselec === "otro") {
      this.setState({
        arsistyle: { display: "" },
      });
    } else {
      this.setState({
        arsistyle: { display: "none" },
        ExtraArea: "",
      });
    }
  }
  compb() {
    localStorage.setItem("p1", JSON.stringify(this.state));
  }
  constructor(props) {
    super(props);
    this.compb = this.compb.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onChangeCorreo = this.onChangeCorreo.bind(this);
    this.onChangeContraseña = this.onChangeContraseña.bind(this);
    this.onChangeNombreOrganizacion =
      this.onChangeNombreOrganizacion.bind(this);
    this.onChangeArea = this.onChangeArea.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.onChangeAñoForm = this.onChangeAñoForm.bind(this);
    this.onChangeNFiscal = this.onChangeNFiscal.bind(this);
    this.onChangePais = this.onChangePais.bind(this);
    this.onChangeRegion = this.onChangeRegion.bind(this);
    this.onChangeComuna = this.onChangeComuna.bind(this);
    this.OnChangeMontoFact = this.OnChangeMontoFact.bind(this);
    this.onChangePagWeb = this.onChangePagWeb.bind(this);
    this.onChangeRedes = this.onChangeRedes.bind(this);
    this.onChangeExtraArea = this.onChangeExtraArea.bind(this);
    this.print = this.print.bind(this);
    this.state = {
      countries: [],
      regions: [],
      subregions: [],
      Nombre: "",
      Correo: "",
      Contraseña: "",
      NombreOrganizacion: "",
      Area: "",
      ExtraArea: "",
      Telefono: "",
      AñoForm: "",
      NFiscal: "",
      cdarea: "+1",
      Pais: "",
      Region: "",
      Comuna: "",
      MontoFact: "",
      PagWeb: "",
      Redes: "",
      successful: false,
      message: "",
      arsistyle: { display: "none" },
      IsAllComplete: true,
      Nconfrm: { pointerEvents: "none" },
    };
  }

  onChangeNombre(e) {
    this.setState({
      Nombre: e.target.value,
    });
    this.authclik();
  }
  print() {
    console.log(this.state);
  }
  onChangeCorreo(e) {
    this.setState({
      Correo: e.target.value,
    });
    this.authclik();
  }
  onChangeExtraArea(e) {
    this.setState({
      ExtraArea: e.target.value,
    });
    this.authclik();
  }
  onChangeContraseña(e) {
    this.setState({
      Contraseña: e.target.value,
    });
    this.authclik();
  }
  onChangeApellido(e) {
    this.setState({
      Apellido: e.target.value,
    });
    this.authclik();
  }
  onChangeNombreOrganizacion(e) {
    this.setState({
      NombreOrganizacion: e.target.value,
    });
    this.authclik();
  }
  onChangeArea(e) {
    const asl = e.target.value;
    this.setState({
      Area: e.target.value,
    });
    this.compotro(asl);
    this.authclik();
  }
  onChangeTelefono(e) {
    this.setState({
      Telefono: e.target.value,
    });
    this.authclik();
  }
  onChangeAñoForm(e) {
    this.setState({
      AñoForm: e.target.value,
    });
    this.authclik();
  }
  onChangeNFiscal(e) {
    this.setState({
      NFiscal: e.target.value,
    });
    this.authclik();
  }
  onChangeRegion(e) {
    this.setState({
      Region: e.target.value,
    });
  }
  onChangeComuna(e) {
    this.setState({
      Comuna: e.target.value,
    });
  }
  OnChangeMontoFact(e) {
    this.setState({
      MontoFact: e.target.value,
    });
    this.authclik();
  }
  onChangePagWeb(e) {
    this.setState({
      PagWeb: e.target.value,
    });
  }
  onChangeRedes(e) {
    this.setState({
      Redes: e.target.value,
    });
  }
  onChangePais(e) {
    let psl = e.target.value;
    let newcda = "";

    for (let i = 0; i < this.state.countries.length; i++) {
      if (this.state.countries[i].name === psl) {
        newcda = "+" + this.state.countries[i].callingCodes[0];
        break;
      }
    }

    console.log(newcda);
    this.setState({
      Pais: psl,
      cdarea: newcda,
    });
    this.authclik();
  }

  render() {
    return (
      <Fragment>
        <div>
          <section id="Formulario">
            <Form>
              <h1>Formulario de registro</h1>
              <h5>
                para registrar su cuenta se necesitaremos algunos datos, para
                ello lo invitamos a rellenar este formulario y contestar una
                pequeña encueta
              </h5>
              {!this.state.successful && (
                <div>
                  <Row className="Fila1">
                    <FormGroup as={Col}>
                      <FormLabel>Correo Electronico</FormLabel>

                      <Input
                        className="form-control"
                        name="Correo"
                        value={this.state.Correo}
                        onChange={this.onChangeCorreo}
                        validations={[email, required]}
                        placeholder="nombre@correo.com"
                      />
                    </FormGroup>
                  </Row>
                  <Row className="fila2">
                    <div>
                      <label htmlFor="nombre">Nombre</label>
                      <Input
                        name="nombre"
                        placeholder="ingrese su nombre"
                        className="form-control"
                        defaultValue={this.state.Nombre}
                        onChange={this.onChangeNombre}
                        validations={[required, notnumber]}
                      />
                    </div>
                    </Row>
                  <Row className="fila3">
                    <label htmlFor="apellido">apellido</label>
                  
                    <Input
                      name="apellido"
                      placeholder="ingrese su apelldo"
                      defaultValue={this.state.Apellido}
                      onChange={this.onChangeApellido}
                      validations={[required,notnumber]}
                      className="form-control"
                    />
                  </Row>

                  <Row className="Fila4">
                    <label htmlFor="Contraseña">Password</label>
                    <Input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="ingrese una contraseña"
                      value={this.state.Contraseña}
                      onChange={this.onChangeContraseña}
                      validations={[required, vpassword]}
                    />
                  </Row>

                  <Row className="Fila5">
                    <FormGroup as={Col}>
                      <label htmlFor="NombreOrganizacion">
                        Nombre de la organizacion
                      </label>
                      <Input
                        type="NombreOrganizacion"
                        placeholder="ingrese el nombre de su organizacion"
                        className="form-control"
                        name="NombreOrganizacion"
                        value={this.NombreOrganizacion}
                        onChange={this.onChangeNombreOrganizacion}
                        validations={[required]}
                      />
                    </FormGroup>
                    <FormGroup as={Col}>
                      <label htmlFor="area">area de la organizacion</label>
                      <select
                        name="area"
                        id="area"
                        onChange={this.onChangeArea}
                        className="form-select"
                      >
                        <option value="">
                          Seleccione Área de la Organización
                        </option>
                        <option value="Dueño Empresa">Dueño Empresa</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Mercadeo">Mercadeo</option>
                        <option value="Administración">Administración</option>
                        <option value="Calidad">Calidad</option>
                        <option value="Área Legal">Área Legal</option>
                        <option value="Área de Proyecto">
                          Área de Proyecto
                        </option>
                        <option value="Comercial">Comercial</option>
                        <option value="Recursos Humanos">
                          Recursos Humanos
                        </option>

                        <option value="Sustentabilidad">Sustentabilidad</option>
                        <option value="otro">otro</option>
                      </select>
                      <label htmlFor="extraare"></label>
                      <Input
                        type="extrarea"
                        name="extraare"
                        value={this.ExtraArea}
                        style={this.state.arsistyle}
                        onChange={this.onChangeExtraArea}
                        className="form-control"
                      />
                    </FormGroup>
                  </Row>
                  <Row className="Fila6">
                    <FormGroup as={Col}>
                      <FormLabel>telefono</FormLabel>
                      <InputGroup className="mb-4">
                        <FormControl
                          disabled
                          value={this.state.cdarea}
                        ></FormControl>
                        <Input
                          className="form-control"
                          onChange={this.onChangeTelefono}
                          type="text"
                          validations={[required,isnumber,estelefono]}
                          placeholder="ingrese su telefono"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup as={Col}>
                      <SeleccionAño
                        onChange={this.onChangeAñoForm}
                        className="SeleccionAño"
                        TituloInputNormal="Año de Formalización del Negocio"
                        TituloInputSeleccion="Seleccione Año de Formalización"
                        opcion1="Antes del 2017"
                        opcion2="2018"
                        opcion3="2019"
                        opcion4="2020"
                        opcion5="2021"
                        opcion6="2022"
                      ></SeleccionAño>
                    </FormGroup>
                  </Row>
                  <Row className="Fila7">
                    <FormGroup as={Col}>
                      <label htmlFor="NFiscal">
                        Número de Identidicador Fiscal de la Organización
                      </label>
                      <Input
                        className="form-control"
                        name="NFiscal"
                        placeholder="ingrese el identificador fiscal de su organizacion"
                        value={this.NFiscal}
                        onChange={this.onChangeNFiscal}
                        validations={[required, isnumber]}
                      />
                    </FormGroup>
                  </Row>
                  <Row className="Fila8">
                    <FormGroup as={Col}>
                      <label htmlFor="paises">Seleccioe el pais</label>
                      <select
                        name="paises"
                        id="pslect"
                        className="form-select"
                        onChange={(e) => {
                          this.onChangePais(e);
                        }}
                      >
                        <option value="">Seleccione su pais</option>
                        {this.state.countries.map((elemento) => (
                          <option key={elemento.name} value={elemento.name}>
                            {elemento.name}
                          </option>
                        ))}
                      </select>
                    </FormGroup>
                    <FormGroup as={Col}>
                      <label htmlFor="regiones">Region</label>
                      <select
                        name="regiones"
                        id="rselect"
                        className="form-select"
                        disabled
                      ></select>
                    </FormGroup>
                    <FormGroup as={Col}>
                      <label htmlFor="comunas">Ciudad</label>
                      <select
                        name="comunas"
                        id="cselect"
                        className="form-select"
                        disabled
                      ></select>
                    </FormGroup>
                  </Row>

                  <label htmlFor="MontoFact">
                    Monto de Facturación del Último Año Fiscal
                  </label>
                  <Input
                  placeholder="ingrese el monto de facturacion del ultimo año fiscal"
                    className="form-control"
                    name="MontoFact"
                    value={this.MontoFact}
                    onChange={this.OnChangeMontoFact}
                    validations={[required,isnumber]}
                  />
                  <label htmlFor="PagWeb">Sitio Web de la Organiación</label>
                  <Input
                    className="form-control"
                    name="PagWeb"
                    placeholder="ingrese el sitio web de su organizacion si es que posee"
                    value={this.PagWeb}
                    onChange={this.onChangePagWeb}
                  />

                  <label htmlFor="Redes">
                    Redes Sociales de la Organización
                  </label>
                  <Input
                 placeholder=" ingrese los nombres de las redes sociales que utiliza"
                    className="form-control"
                    name="Redes"
                    value={this.Redes}
                    onChange={this.onChangeRedes}
                  />
                  <input
                    type="button"
                    onClick={this.print}
                    value="imprimir datos"
                  />
                  <Link to="/registro/pag2" style={this.state.Nconfrm}>
                    <button
                      onClick={this.compb}
                      className="btn btn-lg btn-block btn-light"
                      disabled={this.state.IsAllComplete}
                    >
                      siguiente
                    </button>
                  </Link>
                </div>
              )}
            </Form>
          </section>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(FormReg1);
