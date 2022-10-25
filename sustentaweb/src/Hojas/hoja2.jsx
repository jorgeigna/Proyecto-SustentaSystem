import React from 'react'
import { Fragment,Component } from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import SeleccionCompAccion from '../Component/SeleccionCompAccion';
import SelectActividad from '../Component/SelectActividad';
import SelectAlcances from '../Component/SelectAlcances';
import selectCertif from '../Component/selectCertif';
import SelectNumFem from '../Component/SelectNumFem';
import SelectNumT from '../Component/SelectNumT';
import selectObjetivo from '../Component/selectObjetivo';
import SelectTipoInduc from '../Component/SelectTipoInduc';


class Hoja2 extends Component {
 render(){ return (
<Fragment>
  <body>
    <main>
    <div>
      <section id="Formulario">
        <Form>
        <Row className="Fila1"> 
        <SeleccionCompAccion as={Col} className = "SeleccionarAcc" TituloInputNormal = "Composicion accionaria de la organizacion" TituloInputSeleccion = "Seleccionar Compocision accionaria" 
        opcion1 = "Propiedad de migrantes"
        opcion2 = "Propiedad de persona con discapacidad"
        opcion3 = "Propiedad de cooperativa"
        opcion4 = "Propiedad mayoritaria de mujeres"
        opcion5 = "Propiedad de personas mayores de 60 años"
        opcion6 = "Propiedad de grupos vulnerables"
        opcion7 = "Ninguna de las anteriores"
        >
        </SeleccionCompAccion>              

        </Row>
        <Row className="Fila2"> 
        <SelectNumT as={Col}
        >
        </SelectNumT>
        </Row>
        <Row className="Fila3"> 
        <SelectNumFem as={Col}
        
        
        >
        </SelectNumFem>
        </Row>
        <Row className="Fila4"> 
        test4
        </Row>
        <Row className="Fila5"> 
        test5
        </Row>
        <button>Siguiente</button>
        </Form>
      </section>
    </div>
    </main>
  </body>
</Fragment>
  )
}}
export default Hoja2