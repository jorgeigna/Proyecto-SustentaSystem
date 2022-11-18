import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";


export default function InputTelefono(props){
    return(
        <Form>
            <Form.Label>{props.TituloInputNormal}</Form.Label>
            <InputGroup className="mb-4">
                <Form.Select className="mb-41" controlId="InputTelefono1">
                    <option>{props.TituloInputSeleccion}</option>
                    <option value="1">{props.opcion1}</option>
                    <option value="2">{props.opcion2}</option>
                </Form.Select>
                <Form.Control type= "text" placeholder= {props.placeholder} />
            </InputGroup>

        </Form>

    );
}
