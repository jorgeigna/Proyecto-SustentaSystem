import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function SelectAlcances(props) {
  return (
<Form>
    <Form.Label>{props.TituloInputNormal}</Form.Label>  
    <Form.Select className="mb-3" controlID="InputSeleccion6">  
    <option>{props.TituloInputSeleccion}</option>
    <option value="1">{props.opcion1}</option>
    <option value="2">{props.opcion2}</option>
    <option value="3">{props.opcion3}</option>
    <option value="4">{props.opcion4}</option>
    <option value="5">{props.opcion5}</option>
    <option value="6">{props.opcion6}</option>
    <option value="7">{props.opcion7}</option>
    <option value="8">{props.opcion1}</option>
    <option value="9">{props.opcion2}</option>
    </Form.Select>
</Form>  
    )
}
