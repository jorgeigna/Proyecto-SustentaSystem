import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";

export default function InputGrupo(props){
    return (
        <div>
            <Form>
                <Form.Label>{props.TituloInputNormal}</Form.Label>
                    <InputGroup ClassName="mb-2" controlId="InputGrupo1">
                        <Form.Control type= "text" placeholder= {props.placeholder1}></Form.Control>
                        <Form.Control type= "text" placeholder= {props.placeholder2}a></Form.Control>
                    </InputGroup>
            </Form>
        </div>
      );
}