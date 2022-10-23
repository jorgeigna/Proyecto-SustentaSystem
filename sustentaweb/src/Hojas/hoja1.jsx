import React, {Fragment} from "react";
import Contenedor from "../Component/Contenedor";
import InputNormal from "../Component/InputNormal";
import InputGrupo from  "../Component/InputGrupo"
import SeleccionArea from '../Component/SeleccionArea';

export  function hoja1() {
  return (
    <Fragment>
      <head>
        <title>Formulario SustentaSistem</title>
      </head>
      <body>
          <section>
            <header>
              <Contenedor></Contenedor>
            </header>
          </section>

          <main>
            <section id="Formulario">
              <InputNormal className = "InputEmail" TituloInputNormal = "Email" placeholder = "email@example.com" >
              </InputNormal>
              <InputGrupo className="InputNombeApellido" TituloInputNormal="Nombre Y Apellido" placeholder1="Nombre" placeholder2="Apellido">
              </InputGrupo>
              <InputNormal className="InputNombreOrganizacion" TituloInputNormal="Nombre de la Organización" placeholder="Nombre Organización">
              </InputNormal>
              <SeleccionArea className="InputSeleccion" TituloInputNormal="Área de la Organización" TituloInputSeleccion="Seleccione Área de la Organización" opcion1="Dueño Empresa" opcion2="Finanzas" opcion3="Mercadeo" opcion4="Administración" opcion5="Calidad" opcion6="Área Legal" opcion7="Área de Proyecto"
              opcion8="Comercial" opcion9="Recursos Humanos" opcion10="Sustentabilidad" opcion11="Otro"></SeleccionArea>
  
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
              <button class="button2" type = "button" >
              testing</button>

            </section>

          </main>


      </body>
     
    </Fragment> 
  )
}
