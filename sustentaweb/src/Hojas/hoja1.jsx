import React, {Fragment} from "react";
import Contenedor from "../Component/Contenedor";
import InputNormal from "../Component/InputNormal";
import InputGrupo from  "../Component/InputGrupo"
import SeleccionArea from '../Component/SeleccionArea';
import InputTelefono from "../Component/InputTelefono";
import SeleccionAño from "../Component/SeleccionAño";
import SeleccionPais from "../Component/SeleccionPais";

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

              <InputTelefono className="InputTelefono" TituloInputNormal="Teléfono de Contacto" placeholder="Number" 
              TituloInputSeleccion="+ (Codigo Pais)" opcion1="+56" opcion2="Otro"></InputTelefono>

              <SeleccionAño className="SeleccionAño" TituloInputNormal="Año de Formalización del Negocio" TituloInputSeleccion="Seleccione Año de Formalización" opcion1="Antes del 2017" opcion2="2018" 
              opcion3="2019" opcion4="2020" opcion5="2021" opcion6="2022"></SeleccionAño>

              <InputNormal className="InputIndentificadorFiscal" TituloInputNormal="Número de Identidicador Fiscal de la Organización" placeholder="Identificador Fiscal"></InputNormal>

              <SeleccionPais className="SeleccionPais" TituloInputNormal="Pais" TituloInputSeleccion="Seleccionar Pais" opcion1="Chile" opcion2="Peru" opcion3="Colombia" opcion4="Ecuador" opcion5="Bolivia" opcion6="Otro"></SeleccionPais>

              <InputNormal className="InputFacturacion" TituloInputNormal="Monto de Facturación del Último Año Fiscal" placeholder="Ingrese Monto de Facturación"></InputNormal>

              <InputNormal className="InputSitioWeb" TituloInputNormal="Sitio Web de la Organiación" placeholder="www.Example.com" ></InputNormal>

              <InputNormal className="InputRRSS" TituloInputNormal="Redes Sociales de la Organización" placeholder="RRSS"></InputNormal>
            </section>
            <section>
            

            </section>
          </main>

          <footer>
          

          </footer>


      </body>
     
    </Fragment> 
  )
}
