import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function SelectCertif(props) {
  return (
<Form>
    <Form.Label>{props.TituloInputNormal}</Form.Label>  
    <Form.Select className="mb-3" controlID="InputSeleccion7">   
    <option>{props.TituloInputSeleccion}</option>
    <option value="1">{props.opcion1}</option>
    <option value="2">{props.opcion2}</option>
    <option value="3">{props.opcion3}</option>
    <option value="4">{props.opcion4}</option>
    <option value="5">{props.opcion5}</option>
    <option value="6">{props.opcion6}</option>
    <option value="7">{props.opcion7}</option>
    <option value="8">{props.opcion8}</option>
    <option value="9">{props.opcion9}</option>
    <option value="10">{props.opcion10}</option>
    <option value="11">{props.opcion11}</option>
    <option value="12">{props.opcion12}</option>
    <option value="13">{props.opcion13}</option>
    <option value="14">{props.opcion14}</option>
    <option value="15">{props.opcion15}</option>
    <option value="16">{props.opcion16}</option>
    <option value="17">{props.opcion17}</option>
    </Form.Select>
</Form>  
    )
}
