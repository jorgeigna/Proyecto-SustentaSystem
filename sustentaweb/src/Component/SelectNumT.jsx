import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function SelectNumT(props) {
  return (
<Form>
    <Form.Label>{props.TituloInputNormal}</Form.Label> 
    <Form.Select className="mb-8" controlID="InputSeleccion9">  
    <option>{props.TituloInputSeleccion}</option>
    <option value="1">{props.opcion1}</option>
    <option value="2">{props.opcion2}</option>
    <option value="3">{props.opcion3}</option>
    <option value="4">{props.opcion4}</option>
    </Form.Select>
</Form> 
    )
}
