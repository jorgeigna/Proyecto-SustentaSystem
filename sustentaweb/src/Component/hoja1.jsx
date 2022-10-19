import React, {Fragment} from "react";
export  function hoja1() {
  return (
    <Fragment>
    <div>CORREO ELECTRONICO</div>
    <input type = "text" placeholder = "ingrese el correo electronico empresarial"/>
    <div>NOMBRE Y APELLIDO</div>
    <input type = "text" placeholder = "ingrese nombre y apellido del representante"/>
    <div>NOMBRE DE LA ORGANIZACIÓN</div>
    <input type = "text" placeholder = "ingrese el nombre de la organizacion"/>
    <div>ÁREA EN LA ORGANIZACIÓN</div>
    <select name="select" >
        <option value="1">seleccione el ara de organizacion de su empresa</option>
    </select>
    <div>TELÉFONO DE CONTACTO</div>
    <input type = "text" placeholder = "ingrese el telefono de contacto de la empresa"/>
    <div>AÑO DE FORMALIZACIÓN DEL NEGOCIO</div>
    <input type = "text" placeholder = "ingrese el año de formalizacion de la empresa"/>
    <div> NÚMERO DE IDENTIFICADOR FISCAL DE LA ORGANIZACIÓN</div>
    <input type = "text" placeholder = "ingrese el RUT de la empresa"/>
    <div>PAIS</div>
    <div>REGIÓN DEL PAÍS</div>
    <div>COMUNA</div>
    <div> MONTO DE FACTURACIÓN DEL ÚLTIMO AÑO FISCAL</div>
    <input type = "text" placeholder = "ingrese el monto de factuzacion del ultimo año"/>
    <div>SITIO WEB DE LA ORGANIZACIÓN </div>
    <input type = "text" placeholder = "ingrese el sitio web de la empresa"/>
    <div>RRSS DE LA ORGANIZACIÓN </div>
     
    </Fragment> 
  )
}
