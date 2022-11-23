import React from "react";
import { Fragment, Component } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-validation/build/form";
import SeleccionCompAccion from "../Component/SeleccionCompAccion";
import SelectActividad from "../Component/SelectActividad";
import SelectAlcances from "../Component/SelectAlcances";
import Input from "react-validation/build/input";

import SelectCertif from "../Component/SelectCertif";
import SelectNumFem from "../Component/SelectNumFem";
import SelectNumT from "../Component/SelectNumT";
import SelectMotivacion from "../Component/SelectMotivacion";
import SelectTipoInduc from "../Component/SelectTipoInduc";
import { Link } from "react-router-dom";

var auxcompacc = "";
var auxnumwork = "";
var auxpfem = "";
var auxitype = "";
var auxaccomr = "";
var auxcertf = "";
var auxmotiv = "";
var auxalcan = "";
var auxindextra = "";
var auxcerfextra = "";
var dts = {};
class Formreg2 extends Component {
  authclik() {
    if (
      auxcompacc &&
      auxnumwork &&
      auxpfem &&
      auxitype &&
      auxaccomr &&
      auxcertf &&
      auxmotiv &&
      auxalcan
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
  otrcetif(aselec) {
    if (aselec === "Otra") {
      this.setState({
        cerfexstyle: { display: "" },
      });
    } else {
      this.setState({
        cerfexstyle: { display: "none" },
        cerfextra: "",
      });
    }
  }
  otrind(aselec) {
    if (aselec === "Otro") {
      this.setState({
        indexstyle: { display: "" },
      });
    } else {
      this.setState({
        indexstyle: { display: "none" },
        indextra: "",
      });
    }
  }
  compb() {
    dts = JSON.parse(localStorage.getItem("data"))
    var dts2 = [auxcompacc,auxnumwork,auxpfem,auxitype,auxindextra,auxaccomr,auxcertf,auxcerfextra,auxmotiv,auxalcan]
    var dts3 = dts.concat(dts2)
    localStorage.setItem("data", JSON.stringify(dts3));
  }
  constructor(props) {
    super(props);
    this.otrcetif = this.otrcetif.bind(this);
    this.otrind = this.otrind.bind(this);
    this.onChangecompacc = this.onChangecompacc.bind(this);
    this.onChangenumwork = this.onChangenumwork.bind(this);
    this.onChangepfem = this.onChangepfem.bind(this);
    this.onChangeitype = this.onChangeitype.bind(this);
    this.onChangeaccomr = this.onChangeaccomr.bind(this);
    this.onChangecertf = this.onChangecertf.bind(this);
    this.onChangemotiv = this.onChangemotiv.bind(this);
    this.onChangealcan = this.onChangealcan.bind(this);
    this.onChangeindextra = this.onChangeindextra.bind(this);
    this.onChangecerfextra = this.onChangecerfextra.bind(this);
    this.state = {
      compacc: "",
      numwork: "",
      pfem: "",
      itype: "",
      accomr: "",
      certf: "",
      motiv: "",
      alcan: "",
      indexstyle: { display: "none" },
      cerfexstyle: { display: "none" },
      indextra: "",
      cerfextra: "",
      Nconfrm: { pointerEvents: "none" },
      IsAllComplete: true,
    };
  }

  onChangecompacc(e) {
    auxcompacc = e.target.value;
    this.setState({
      compacc: e.target.value,
    });
    this.authclik();
  }
  onChangenumwork(e) {
    auxnumwork = e.target.value;
    this.setState({
      numwork: e.target.value,
    });
    this.authclik();
  }
  onChangepfem(e) {
    auxpfem = e.target.value;
    this.setState({
      pfem: e.target.value,
    });
    this.authclik();
  }
  onChangeitype(e) {
    auxitype = e.target.value;
    this.otrind(auxitype);

    this.setState({
      itype: e.target.value,
    });
    this.authclik();
  }
  onChangeindextra(e) {
    auxindextra = e.target.value;
    this.setState({
      indextra: e.target.value,
    });
  }
  onChangecerfextra(e) {
    auxcerfextra = e.target.value;
    this.setState({
      cerfextra: e.target.value,
    });
  }
  onChangeaccomr(e) {
    auxaccomr = e.target.value;
    this.setState({
      accomr: e.target.value,
    });
    this.authclik();
  }
  onChangecertf(e) {
    auxcertf = e.target.value;
    this.otrcetif(auxcertf);
    this.setState({
      certf: e.target.value,
    });
    this.authclik();
  }
  onChangemotiv(e) {
    auxmotiv = e.target.value;
    this.setState({
      motiv: e.target.value,
    });
    this.authclik();
  }
  onChangealcan(e) {
    auxalcan = e.target.value;
    this.setState({
      alcan: e.target.value,
    });
    this.authclik();
  }
  render() {
    return (
      <Fragment>
        <section id="Formulario">
          <Form>
            <h1>Formulario de registro</h1>
            <h5>
              Para conocer un poco más sobre la actual situación en relación a
              la sustentabilidad del negocio que lideras, haremos una seríe de
              preguntas diagnósticas que permitirá establecer un punto de
              partida al desarrollo de modelo de negocio sustentable{" "}
            </h5>
            <Row>
              <SeleccionCompAccion
                onChange={this.onChangecompacc}
                className="SeleccionarAcc"
                TituloInputNormal="Composición Accionaria de la Organización"
                TituloInputSeleccion="Seleccionar Composición Accionaria"
                opcion1="Propiedad de migrantes"
                opcion2="Propiedad de persona con discapacidad"
                opcion3="Propiedad de cooperativa"
                opcion4="Propiedad mayoritaria de mujeres"
                opcion5="Propiedad de personas mayores de 60 años"
                opcion6="Propiedad de grupos vulnerables"
                opcion7="Ninguna de las anteriores"
              ></SeleccionCompAccion>
            </Row>

            <Row>
              <SelectNumT
                onChange={this.onChangenumwork}
                className="SeleccionarNumTrab"
                TituloInputNormal="Cantidad de Trabajadores Actuales en la Organización"
                TituloInputSeleccion="Seleccionar Cantidad"
                opcion1="De 0 a 9"
                opcion2="De 10 a 50"
                opcion3="De 51 a 150"
                opcion4="Mas de 151"
              ></SelectNumT>
            </Row>

            <Row>
              <SelectNumFem
                onChange={this.onChangepfem}
                className="SeleccionarNumMujeres"
                TituloInputNormal="Porcentaje de Mujeres en su Empresa"
                TituloInputSeleccion="Seleccionar Porcentaje"
                opcion1="Al menos 10%"
                opcion2="Hasta 20%"
                opcion3="Hasta 30%"
                opcion4="Hasta 50%"
                opcion5="Mas de un 50%"
              ></SelectNumFem>
            </Row>

            <Row>
              <SelectTipoInduc
                onChange={this.onChangeitype}
                className="SeleccionarTipIndustria"
                TituloInputNormal="Tipo de Industria en la que Opera la Organización"
                TituloInputSeleccion="Seleccionar Tipo de Industria"
                opcion1="Agricultura"
                opcion2="Alimentación"
                opcion3="Artesanías"
                opcion4="Actividades Veterinarias"
                opcion5="Bebidas No Alcohólicas"
                opcion6="Bebidas Alcohólicas"
                opcion7="Cauchos y Plásticos"
                opcion8="Computación y Productos Electrónicos"
                opcion9="Construcción"
                opcion10="Cuero"
                opcion11="Cuidado Personal"
                opcion12="Cultura y Arte"
                opcion13="Educaión Presencial"
                opcion14="Educación Online"
                opcion15="Video y Fotografía"
                opcion16="Generación de Energia Solar"
                opcion17="Hotelería"
                opcion18="Impresión"
                opcion19="Industrias Químicas"
                opcion20="Ingenieria Eléctrica"
                opcion21="Ingenieria Mecánica"
                opcion22="Joyas"
                opcion23="Juguetes"
                opcion24="Laboratorios"
                opcion25="Limpieza y Aseo"
                opcion26="Madera"
                opcion27="Maquinaria y Equipos"
                opcion28="Medios de Comunicación"
                opcion29="Papel"
                opcion30="Parques y Recreación"
                opcion31="Pesca y Acuicultura"
                opcion32="Petróleo"
                opcion33="Porucción Animal"
                opcion34="Producción de Gas"
                opcion35="Producción de Metales Básicos"
                opcion36="Propagación de Plantas"
                opcion37="Publicidad y Estudios de Mercado"
                opcion38="Reciclaje"
                opcion39="Recolección de Residuos"
                opcion40="Restaurantes"
                opcion41="Reparación de Maquinaria y Equipos"
                opcion42="Servicios de Telecomunicaciones"
                opcion43="Servicios de Correo"
                opcion44="Servicios de Salud"
                opcion45="Servicios de Seguros"
                opcion46="Seguros Financieros"
                opcion47="Servicios Profesionales"
                opcion48="Servicios Tecnólogicos"
                opcion49="Suministros Medicos"
                opcion50="Textiles"
                opcion51="Trasporte Aéreo"
                opcion52="Trasporte Terrestre"
                opcion53="Transporte Ferrovial"
                opcion54="Transporte Marítimo"
                opcion55="Turismo"
                opcion56="Vestimenta"
                opcion57="Otro"
              ></SelectTipoInduc>
              <label htmlFor="otrind" style={this.state.indexstyle}>
                {" "}
                ingrese su respuesta
              </label>
              <Input
                name="otrind"
                style={this.state.indexstyle}
                className="form-control"
                onChange={this.onChangeindextra}
              ></Input>
            </Row>

            <Row>
              <SelectActividad
                onChange={this.onChangeaccomr}
                className="SeleccionarActividadCom"
                TituloInputNormal="Actividad Comercial del Negocio"
                TituloInputSeleccion="Seleccionar Actividad"
                opcion1="Producción / Fabricación"
                opcion2="Comercio / Mayoreo"
                opcion3="Comercio / Minoreo"
                opcion4="Exportación"
                opcion5="Importación"
                opcion6="Servicios"
              ></SelectActividad>
            </Row>

            <Row>
              <SelectCertif
                onChange={this.onChangecertf}
                className="SeleccionarCertificaciones"
                TituloInputNormal="Seleccione Si Posee Alguna de estas Certificaciones SocioAmbientales"
                TituloInputSeleccion="Seleccione si posee o no posee "
                opcion1="Acuerdo de Producción Limpia"
                opcion2="Alimento Vegano"
                opcion3="Biodegradabilidad"
                opcion4="Certificación Comercio Justo (FAIRTRADE)"
                opcion5="Certificación ISO"
                opcion6="Empresa Certificada B"
                opcion7="Fair For Life"
                opcion8="Forest Stewardship Council (FSC)"
                opcion9="Gestión de Residuos"
                opcion10="Global Initiative Report"
                opcion11="Huella de Carbono"
                opcion12="Non Gmo Project"
                opcion13="Respetuosos con Animales"
                opcion14="Sello Producto Orgánico"
                opcion15="Sello S de Sustentabilidad"
                opcion16="Otra"
                opcion17="No Cuento Con Sello Socioambiental"
              ></SelectCertif>
              <label htmlFor="otrcerf" style={this.state.cerfexstyle}>
                {" "}
                ingrese su respuesta
              </label>
              <Input
                className="form-control"
                style={this.state.cerfexstyle}
                name="otrcerf"
                onChange={this.onChangecerfextra}
              ></Input>
            </Row>

            <Row>
              <SelectMotivacion
                onChange={this.onChangemotiv}
                className="SeleccionarMotivacion"
                TituloInputNormal="¿Qué Motivación Tienes al Tomar este Apoyo y Orientación sobre Gestión Sustentable?"
                TituloInputSeleccion="Seleccionar Motivación y Orientaición"
                opcion1="Iniciar el camino hacia la sustentabilidad"
                opcion2="Mejorar la gestión actual de mi empresa basada en el Triple Impacto"
                opcion3="Determinar los indicadores más idóneos de sustentabilidad para el negocio"
                opcion4="Obtener una política socioambiental ajustada al negocio"
                opcion5="Aumentar la red de proveedores y clientes sustentables"
                opcion6="Capacitarme en temas que afecten la operación del negocio"
                opcion7="Estar al día con le marco jurídico-normativo y regulatorio del país en cuestiones de sustentabilidad"
                opcion8="Preparar el negocio para una certificación socioambiental"
                opcion9="Recibir asesoría especializada"
              ></SelectMotivacion>
            </Row>

            <Row>
              <SelectAlcances
                onChange={this.onChangealcan}
                className="SeleccionarAlcances"
                TituloInputNormal="Elija los Alcances de la Medición de Impactoque Espera Obtener para el Negocio"
                TituloInputSeleccion="Seleccione los Alcances"
                opcion1="Modelo de Negocio"
                opcion2="Economía Circular"
                opcion3="Mayor Rentabilidad"
                opcion4="Impacto Social"
                opcion5="Impacto Ambiental"
                opcion6="Objetivos de Desarrollo Sostenible 2030"
              ></SelectAlcances>
            </Row>

            <Link to="/registro/enc" style={this.state.Nconfrm}>
              <button
                className="btn btn-lg btn-block btn-light"
                style={{ width: "90%",marginLeft:"5%",marginTop:"10px" }}
                onClick={this.compb}
                disabled={this.state.IsAllComplete}
              >
                Siguiente
              </button>
            </Link>
          </Form>
        </section>
      </Fragment>
    );
  }
}
export default Formreg2;
