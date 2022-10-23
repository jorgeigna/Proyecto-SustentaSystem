import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function InputNormal(props){
    return (
        <div>
            <Form>
            <Form.Group className="mb-1" controlId="InpurtNormal1">
                <Form.Label>{props.TituloInputNormal}</Form.Label>
                <Form.Control type= "text" placeholder= {props.placeholder} />
            </Form.Group>
            </Form>
        </div>
      );
}
