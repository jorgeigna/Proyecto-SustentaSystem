import React, { Fragment, Component } from "react";
import SeleccionAño from "../Component/SeleccionAño";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { withRouter } from "../common/with-router";
import CheckButton from "react-validation/build/button";
import { FormGroup, FormLabel, InputGroup, FormControl, Stack } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
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
  if (!isMobilePhone(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        debe ser un numero de telefono!!!
      </div>
    );
  }
};
var auxNombre = "";
var auxApellido = "";
var auxCorreo = "";
var auxAñoForm = "";
var auxArea = "";
var auxPais = "";
var auxNombreOrganizacion = "";
var auxMontoFact = "";
var auxTelefono = "";
var auxContraseña = "";
var dts = [];
var auxExtraArea = "";
var auxNFiscal = "";
var auxcdarea = "";
var auxRegion = "";
var auxComuna = "";
var auxPagWeb = "";
var auxRedes = "";
var auxdivisa = "";
var convertido = "USD";
var base = "";
var councode = "";
var regcode = "";
class FormReg1 extends Component {
  authclik() {
    if (
      auxRegion &&
      auxComuna &&
      auxNombre &&
      auxApellido &&
      auxCorreo &&
      auxAñoForm &&
      auxArea &&
      auxPais &&
      auxNombreOrganizacion &&
      auxMontoFact &&
      auxTelefono &&
      auxContraseña
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
exrate(){
  fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
      .then((response) => response.json())
      .then((data) => {   
        auxdivisa = data.rates[convertido]
        this.setState({
          divisa: auxdivisa
        })
      })
        .catch((error) => {
          console.log("Error: ", error);
      });
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
  getstates(){
    axios
    .get(`https://api.countrystatecity.in/v1/countries/${councode}/states`, {headers: {
      'X-CSCAPI-KEY': 'VUdFVTN4amFnV09RQ0RDUHpRN1FubFBzblhHSmZyTUtIdUNwbDNuVQ=='
    }}
    
    )
    .then((res) =>{
      this.setState({ regions: res.data });
      var sl = document.getElementById("stselec")
      sl.innerHTML= "";
      let ftopt = document.createElement("option")
      ftopt.value =""
      ftopt.id = ""
      ftopt.innerHTML = "Seleccione su region/ciudad"
      sl.appendChild(ftopt)
      for (var i = 0; i< res.data.length; i++){
        var opt = document.createElement("option")
        opt.value = res.data[i].name
        opt.id = res.data[i].iso2
        opt.innerHTML = res.data[i].name
        sl.appendChild(opt)
        this.setState({
          regfill:true
        })
      }
    }).catch((error) =>{
      console.log(error)
    })

  }
getcities(){
  axios
  .get(`https://api.countrystatecity.in/v1/countries/${councode}/states/${regcode}/cities`, {headers: {
    'X-CSCAPI-KEY': 'VUdFVTN4amFnV09RQ0RDUHpRN1FubFBzblhHSmZyTUtIdUNwbDNuVQ=='
  }}
  
  )
  .then((res) =>{
    this.setState({ subregions: res.data });
    var cml = document.getElementById("comsel")
    cml.innerHTML= ""
    let ftopt = document.createElement("option")
    ftopt.value =""
    ftopt.id = ""
    ftopt.innerHTML = "Seleccione su ciudad"
    cml.appendChild(ftopt)
    for (var i = 0; i< res.data.length; i++){
      var opt = document.createElement("option")
      opt.value = res.data[i].name
      opt.innerHTML = res.data[i].name
      cml.appendChild(opt)
      this.setState({
        confill:true
      })
    }
  }).catch((error) =>{
    console.log(error)
  })

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
    auxTelefono = auxcdarea + auxTelefono;
    dts = {
      Nombre : auxNombre,
      Apellido : auxApellido, 
      Correo : auxCorreo,
      Contraseña : auxContraseña,
      NombreOrganizacion : auxNombreOrganizacion,
      Area : auxArea,
      ExtraArea : auxExtraArea,
      AñoForm : auxAñoForm,
      Telefono : auxTelefono,
      Pais : auxPais,
      Region : auxRegion,
      Comuna : auxComuna,
      NFiscal : auxNFiscal,
      MontoFact : auxMontoFact,
      divisa : auxdivisa ,
      PagWeb : auxPagWeb,
      Redes : auxRedes,
     } ;
    localStorage.setItem("data", JSON.stringify(dts));
  }
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
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
    this.exrate = this.exrate.bind(this);
    this.getstates = this.getstates.bind(this);
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
      divisa :"",
      valextrarea :[],
      cdarea: "+1",
      Pais: "",
      Region: "",
      Comuna: "",
      MontoFact: "",
      PagWeb: "",
      Redes: "",
      loading: false,
      message: "",
      confill: false,
      regfill: false,
      arsistyle: { display: "none" },
      IsAllComplete: true,
      Nconfrm: { pointerEvents: "none" },
    };
  }
  print(){
    console.log(councode)
  }

  onChangeNombre(e) {
    auxNombre = e.target.value;
    this.setState({
      Nombre: e.target.value,
    });
    this.authclik();
  }
  onChangeCorreo(e) {
    auxCorreo = e.target.value;
    this.setState({
      Correo: e.target.value,
    });
    this.authclik();
  }
  onChangeExtraArea(e) {
    auxExtraArea = e.target.value;
    this.setState({
      ExtraArea: e.target.value,
    });
    this.authclik();
  }
  onChangeContraseña(e) {
    auxContraseña = e.target.value;
    this.setState({
      Contraseña: e.target.value,
    });
    this.authclik();
  }
  onChangeApellido(e) {
    auxApellido = e.target.value;
    this.setState({
      Apellido: e.target.value,
    });
    this.authclik();
  }
  onChangeNombreOrganizacion(e) {
    auxNombreOrganizacion = e.target.value;
    this.setState({
      NombreOrganizacion: e.target.value,
    });
    this.authclik();
  }
  onChangeArea(e) {
    auxArea = e.target.value;

    this.setState({
      Area: e.target.value,
    });
    this.compotro(auxArea);
    this.authclik();
  }
  onChangeTelefono(e) {
    auxTelefono = e.target.value;
    this.setState({
      Telefono: e.target.value,
    });
    this.authclik();
  }
  onChangeAñoForm(e) {
    auxAñoForm = e.target.value;
    this.setState({
      AñoForm: e.target.value,
    });
    this.authclik();
  }
  onChangeNFiscal(e) {
    auxNFiscal = e.target.value;
    this.setState({
      NFiscal: e.target.value,
    });
    this.authclik();
  }
  onChangeRegion(e) {
    if (e.target.value !== "") {
      auxRegion = e.target.value;
      this.setState({
        Region: e.target.value,
        regfill: true,
      })
      this.authclik()
      const index = e.target.selectedIndex;
      const el = e.target.childNodes[index]
      regcode = el.getAttribute('id'); 
      this.getcities();
      ;
    } else {
      auxRegion = "";
      this.setState({
        Region: "",
        regfill: false,
      });
    }
  }
  onChangeComuna(e) {
    auxComuna = e.target.value;
    this.setState({
      Comuna: e.target.value,
    });
  }
  OnChangeMontoFact(e) {
    auxMontoFact = e.target.value;
    this.setState({
      MontoFact: e.target.value,
    });
    this.authclik();
  }
  onChangePagWeb(e) {
    auxPagWeb = e.target.value;
    this.setState({
      PagWeb: e.target.value,
    });
  }
  onChangeRedes(e) {
    auxRedes = e.target.value;
    this.setState({
      Redes: e.target.value,
    });
  }
  onChangePais(e) {
    auxPais = e.target.value;
    if (auxPais !== "") {
      for (let i = 0; i < this.state.countries.length; i++) {
        if (this.state.countries[i].name === auxPais) {
          auxcdarea = "+" + this.state.countries[i].callingCodes[0];
          base = this.state.countries[i].currencies[0].code
          councode = this.state.countries[i].alpha2Code
          break;
        }
      }

      this.setState({
        Pais: auxPais,
        cdarea: auxcdarea,
      });
      this.exrate();
      this.authclik();
      this.getstates();
    } else {
      auxPais = "";
      auxcdarea = "";
      this.setState({
        Pais: "",
        cdarea: "+1",
      });
    }
  }
  handleButton(e) {
    e.preventDefault();
    this.form.validateAll();
    this.compb()
    this.setState({
      loading: true,
    });
    if (this.checkBtn.context._errors.length === 0) {
        this.props.router.navigate("/registro/pag2");
    }
  }
  render() {
    return (
      <Fragment>
        <div className="containerform">
          <section id="Formulario">
            <Form
              onSubmit={this.handleButton}
              ref={(c) => {
                this.form = c;
              }}
            >
              <h1>Formulario de registro</h1>
              <h5>
                para registrar su cuenta se necesitaremos algunos datos, para
                ello lo invitamos a rellenar este formulario y contestar una
                pequeña encueta
              </h5>
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
                      value={this.state.Nombre}
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
                    value={this.state.Apellido}
                    onChange={this.onChangeApellido}
                    validations={[required, notnumber]}
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
                      <option value="Área de Proyecto">Área de Proyecto</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Recursos Humanos">Recursos Humanos</option>

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
                        validations={[required, isnumber, estelefono]}
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
                      id="stselec"
                      disabled ={!this.state.regfill}
                      className="form-select"
                      onChange={(e) => {
                        this.onChangeRegion(e);
                      }}
                    > 
                    <option value="">Seleccione su estado/regiob</option>
                    </select>
                  </FormGroup>
                  <FormGroup as={Col}>
                    <label htmlFor="comunas">Ciudad</label>
                    <select
                      name="comunas"
                      id="comsel"
                      disabled ={!this.state.confill}
                      className="form-select"
                      onChange={(e) => {
                        this.onChangeComuna(e);
                      }}
                    > 
                    <option value="">Seleccione su ciudad/comuna</option>
                    </select>
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
                  validations={[required, isnumber]}
                />
                <label htmlFor="PagWeb">Sitio Web de la Organiación</label>
                <Input
                  className="form-control"
                  name="PagWeb"
                  placeholder="ingrese el sitio web de su organizacion si es que posee"
                  value={this.PagWeb}
                  onChange={this.onChangePagWeb}
                />

                <label htmlFor="Redes">Redes Sociales de la Organización</label>
                <Input
                  placeholder=" ingrese los nombres de las redes sociales que utiliza"
                  className="form-control"
                  name="Redes"
                  value={this.Redes}
                  onChange={this.onChangeRedes}
                />
              </div>
<input type="button" onClick={this.getstates} />
              <CheckButton
                className="w-100 mt-3 btn btn-lg btn-block btn-light "
                disabled={this.state.IsAllComplete}
                style={this.state.Nconfrm}
                ref={c => {
                  this.checkBtn = c;
                }}
              >
                siguiente
              </CheckButton>
            </Form>
          </section>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(FormReg1);
