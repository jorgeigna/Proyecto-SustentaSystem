import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function SelectCertif(props) {
  return (
<Form>
    <Form.Label>{props.TituloInputNormal}</Form.Label>  
    <Form.Select className="mb-3" controlID="InputSeleccion7" onChange={props.onChange}>   
    <option>{props.TituloInputSeleccion}</option>
    <option value={props.opcion1}>{props.opcion1}</option>
    <option value={props.opcion2}>{props.opcion2}</option>
    <option value={props.opcion3}>{props.opcion3}</option>
    <option value={props.opcion4}>{props.opcion4}</option>
    <option value={props.opcion5}>{props.opcion5}</option>
    <option value={props.opcion6}>{props.opcion6}</option>
    <option value={props.opcion7}>{props.opcion7}</option>
    <option value={props.opcion8}>{props.opcion8}</option>
    <option value={props.opcion9}>{props.opcion9}</option>
    <option value={props.opcion10}>{props.opcion10}</option>
    <option value={props.opcion11}>{props.opcion11}</option>
    <option value={props.opcion12}>{props.opcion12}</option>
    <option value={props.opcion13}>{props.opcion13}</option>
    <option value={props.opcion14}>{props.opcion14}</option>
    <option value={props.opcion15}>{props.opcion15}</option>
    <option value={props.opcion16}>{props.opcion16}</option>
    <option value={props.opcion17}>{props.opcion17}</option>
    </Form.Select>
</Form>  
    )
}
