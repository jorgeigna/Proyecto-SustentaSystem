import React, {Fragment,Component} from "react";
import Contenedor from "../Component/Contenedor";
import InputNormal from "../Component/InputNormal";
import InputGrupo from  "../Component/InputGrupo"
import SeleccionArea from '../Component/SeleccionArea';
import InputTelefono from "../Component/InputTelefono";
import SeleccionAño from "../Component/SeleccionAño";
import SeleccionPais from "../Component/SeleccionPais";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

class Hoja1 extends Component {
  nextF(){
      window.alert("Procediendo a la siguiente pagina");

}
  render(){ return (
    <Fragment>
      <body>
            <main>
              <div>
                <section id="Formulario">
                    <Form>
                      <Row className="Fila1"> 
                        <Form.Group as={Col}>
                          <InputNormal as={Col} className = "InputEmail" TituloInputNormal = "Email" placeholder = "email@example.com" >
                          </InputNormal>              
                        </Form.Group>
                        <Form.Group as={Col}>
                          <InputGrupo as={Col} className="InputNombeApellido" TituloInputNormal="Nombre Y Apellido" placeholder1="Nombre" placeholder2="Apellido">
                          </InputGrupo>
                        </Form.Group>
                      </Row>
                      <Row className="Fila2">
                          <Form.Group as={Col}>
                            <InputNormal className="InputNombreOrganizacion" TituloInputNormal="Nombre de la Organización" placeholder="Nombre Organización">
                            </InputNormal>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <SeleccionArea className="InputSeleccion" TituloInputNormal="Área de la Organización" TituloInputSeleccion="Seleccione Área de la Organización" opcion1="Dueño Empresa" opcion2="Finanzas" opcion3="Mercadeo" opcion4="Administración" opcion5="Calidad" opcion6="Área Legal" opcion7="Área de Proyecto"
                            opcion8="Comercial" opcion9="Recursos Humanos" opcion10="Sustentabilidad" opcion11="Otro"></SeleccionArea>
                          </Form.Group>
                      </Row>
                      <Row className="Fila3">
                        <Form.Group as={Col}>
                          <InputTelefono className="InputTelefono" TituloInputNormal="Teléfono de Contacto" placeholder="Number" 
                          TituloInputSeleccion="+ (Codigo Pais)" opcion1="+56" opcion2="Otro"></InputTelefono>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <SeleccionAño className="SeleccionAño" TituloInputNormal="Año de Formalización del Negocio" TituloInputSeleccion="Seleccione Año de Formalización" opcion1="Antes del 2017" opcion2="2018" 
                          opcion3="2019" opcion4="2020" opcion5="2021" opcion6="2022"></SeleccionAño>
                        </Form.Group>
                      </Row>
                      <Row className="Fila4">
                        <Form.Group as={Col}>
                          <InputNormal className="InputIndentificadorFiscal" TituloInputNormal="Número de Identidicador Fiscal de la Organización" placeholder="Identificador Fiscal"></InputNormal>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <SeleccionPais className="SeleccionPais" TituloInputNormal="Pais" TituloInputSeleccion="Seleccionar Pais" opcion1="Chile" opcion2="Peru" opcion3="Colombia" opcion4="Ecuador" opcion5="Bolivia" opcion6="Otro"></SeleccionPais>
                        </Form.Group>
                      </Row>
                      <InputNormal className="InputFacturacion" TituloInputNormal="Monto de Facturación del Último Año Fiscal" placeholder="Ingrese Monto de Facturación"></InputNormal>

                      <InputNormal className="InputSitioWeb" TituloInputNormal="Sitio Web de la Organiación" placeholder="www.Example.com" ></InputNormal>

                      <InputNormal className="InputRRSS" TituloInputNormal="Redes Sociales de la Organización" placeholder="RRSS"></InputNormal>
                      <button Class = "Button"onClick={this.nextF}>siguiente</button>
                    </Form>

                </section>
              </div>
            </main>
            <footer>
            </footer>


      </body>
     
    </Fragment> 
  )
}
}
export default Hoja1