import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export default function SelectTipoInduc(props) {
  return (
    <Form>
      <Form.Label>{props.TituloInputNormal}</Form.Label>
      <Form.Select className="mb-3" onChange={props.onChange}>
        <option value="">{props.TituloInputSeleccion}</option>
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
        <option value={props.opcion18}>{props.opcion18}</option>
        <option value={props.opcion19}>{props.opcion19}</option>
        <option value={props.opcion20}>{props.opcion20}</option>
        <option value={props.opcion21}>{props.opcion21}</option>
        <option value={props.opcion22}>{props.opcion22}</option>
        <option value={props.opcion23}>{props.opcion23}</option>
        <option value={props.opcion24}>{props.opcion24}</option>
        <option value={props.opcion25}>{props.opcion25}</option>
        <option value={props.opcion26}>{props.opcion26}</option>
        <option value={props.opcion27}>{props.opcion27}</option>
        <option value={props.opcion28}>{props.opcion28}</option>
        <option value={props.opcion29}>{props.opcion29}</option>
        <option value={props.opcion30}>{props.opcion30}</option>
        <option value={props.opcion31}>{props.opcion31}</option>
        <option value={props.opcion32}>{props.opcion32}</option>
        <option value={props.opcion33}>{props.opcion33}</option>
        <option value={props.opcion34}>{props.opcion34}</option>
        <option value={props.opcion35}>{props.opcion35}</option>
        <option value={props.opcion36}>{props.opcion36}</option>
        <option value={props.opcion37}>{props.opcion37}</option>
        <option value={props.opcion38}>{props.opcion38}</option>
        <option value={props.opcion39}>{props.opcion39}</option>
        <option value={props.opcion40}>{props.opcion40}</option>
        <option value={props.opcion41}>{props.opcion41}</option>
        <option value={props.opcion42}>{props.opcion42}</option>
        <option value={props.opcion43}>{props.opcion43}</option>
        <option value={props.opcion44}>{props.opcion44}</option>
        <option value={props.opcion45}>{props.opcion45}</option>
        <option value={props.opcion46}>{props.opcion46}</option>
        <option value={props.opcion47}>{props.opcion47}</option>
        <option value={props.opcion48}>{props.opcion48}</option>
        <option value={props.opcion49}>{props.opcion49}</option>
        <option value={props.opcion50}>{props.opcion50}</option>
        <option value={props.opcion51}>{props.opcion51}</option>
        <option value={props.opcion52}>{props.opcion52}</option>
        <option value={props.opcion53}>{props.opcion53}</option>
        <option value={props.opcion54}>{props.opcion54}</option>
        <option value={props.opcion55}>{props.opcion55}</option>
        <option value={props.opcion56}>{props.opcion56}</option>
        <option value={props.opcion57}>{props.opcion57}</option>
      </Form.Select>
    </Form>
  );
}
