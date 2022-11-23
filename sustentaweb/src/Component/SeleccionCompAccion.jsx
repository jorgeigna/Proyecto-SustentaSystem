import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function SeleccionCompAccion(props) {
  return (
    <Form>
    <Form.Label>{props.TituloInputNormal}</Form.Label>
    <Form.Select className="mb-7" onChange={props.onChange}>   
    <option value="">{props.TituloInputSeleccion}</option>
    <option value={props.opcion1}>{props.opcion1}</option>
    <option value={props.opcion2}>{props.opcion2}</option>
    <option value={props.opcion3}>{props.opcion3}</option>
    <option value={props.opcion4}>{props.opcion4}</option>
    <option value={props.opcion5}>{props.opcion5}</option>
    <option value={props.opcion6}>{props.opcion6}</option>
    <option value={props.opcion7}>{props.opcion7}</option>
    </Form.Select>
    </Form>   
    )
}
