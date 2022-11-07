import React from 'react'
import { Fragment,Component } from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import SeleccionCompAccion from '../Component/SeleccionCompAccion';
import SelectActividad from '../Component/SelectActividad';
import SelectAlcances from '../Component/SelectAlcances';
import SelectCertif from '../Component/SelectCertif';
import SelectNumFem from '../Component/SelectNumFem';
import SelectNumT from '../Component/SelectNumT';
import SelectMotivacion from '../Component/SelectMotivacion';
import SelectTipoInduc from '../Component/SelectTipoInduc';


class Hoja2 extends Component {
 render(){ return (
  <Fragment>
    <body>
      <main>
      <div>
        <section id="Formulario">
          <Form>
          <Row> 
          <SeleccionCompAccion className = "SeleccionarAcc" TituloInputNormal = "Composición Accionaria de la Organización" TituloInputSeleccion = "Seleccionar Composición Accionaria" 
          opcion1 = "Propiedad de migrantes"
          opcion2 = "Propiedad de persona con discapacidad"
          opcion3 = "Propiedad de cooperativa"
          opcion4 = "Propiedad mayoritaria de mujeres"
          opcion5 = "Propiedad de personas mayores de 60 años"
          opcion6 = "Propiedad de grupos vulnerables"
          opcion7 = "Ninguna de las anteriores"
          >
          </SeleccionCompAccion>              
          </Row>

          <Row>
          <SelectNumT className="SeleccionarNumTrab" TituloInputNormal="Cantidad de Trabajadores Actuales en la Organización" TituloInputSeleccion="Seleccionar Cantidad"
          opcion1 = "De 0 a 9"
          opcion2 = "De 10 a 50"
          opcion3 = "De 51 a 150"
          opcion4 = "Mas de 151">
          </SelectNumT>
          </Row>

          <Row> 
          <SelectNumFem className="SeleccionarNumMujeres" TituloInputNormal="Porcentaje de Mujeres en su Empresa" TituloInputSeleccion="Seleccionar Porcentaje"
          opcion1 = "Al menos 10%"
          opcion2 = "Hasta 20%"
          opcion3 = "Hasta 30%"
          opcion4 = "Hasta 50%"
          opcion5 = "Mas de un 50%" >
          </SelectNumFem>
          </Row>

          <Row>
            <SelectTipoInduc className="SeleccionarTipIndustria" TituloInputNormal="Tipo de Industria en la que Opera la Organización" TituloInputSeleccion="Seleccionar Tipo de Industria"
            opcion1 = "Agricultura"                           opcion2 = "Alimentación"           
            opcion3 = "Artesanías"                            opcion4 = "Actividades Veterinarias" 
            opcion5 = "Bebidas No Alcohólicas"                opcion6 = "Bebidas Alcohólicas"      
            opcion7 = "Cauchos y Plásticos"                   opcion8 = "Computación y Productos Electrónicos"
            opcion9 = "Construcción"                          opcion10 = "Cuero"
            opcion11 = "Cuidado Personal"                     opcion12 = "Cultura y Arte"
            opcion13 = "Educaión Presencial"                  opcion14 = "Educación Online"
            opcion15 = "Video y Fotografía"                   opcion16 = "Generación de Energia Solar"
            opcion17 = "Hotelería"                            opcion18 = "Impresión"
            opcion19 = "Industrias Químicas"                  opcion20 = "Ingenieria Eléctrica"
            opcion21 = "Ingenieria Mecánica"                  opcion22 = "Joyas"
            opcion23 = "Juguetes"                             opcion24 = "Laboratorios"
            opcion25 = "Limpieza y Aseo"                      opcion26 = "Madera"
            opcion27 = "Maquinaria y Equipos"                 opcion28 = "Medios de Comunicación"
            opcion29 = "Papel"                                opcion30 = "Parques y Recreación"
            opcion31 = "Pesca y Acuicultura"                  opcion32 = "Petróleo"           
            opcion33 = "Porucción Animal"                     opcion34 = "Producción de Gas" 
            opcion35 = "Producción de Metales Básicos"        opcion36 = "Propagación de Plantas"      
            opcion37 = "Publicidad y Estudios de Mercado"     opcion38 = "Reciclaje"
            opcion39 = "Recolección de Residuos"              opcion40 = "Restaurantes"
            opcion41 = "Reparación de Maquinaria y Equipos"   opcion42 = "Servicios de Telecomunicaciones"           
            opcion43 = "Servicios de Correo"                  opcion44 = "Servicios de Salud" 
            opcion45 = "Servicios de Seguros"                 opcion46 = "Seguros Financieros"      
            opcion47 = "Servicios Profesionales"              opcion48 = "Servicios Tecnólogicos"
            opcion49 = "Suministros Medicos"                  opcion50 = "Textiles"
            opcion51 = "Trasporte Aéreo"                      opcion52 = "Trasporte Terrestre"           
            opcion53 = "Transporte Ferrovial"                 opcion54 = "Transporte Marítimo" 
            opcion55 = "Turismo"                              opcion56 = "Vestimenta"      
            opcion57 = "Otro">  
            </SelectTipoInduc>
          </Row>

          <Row> 
            <SelectActividad className="SeleccionarActividadCom" TituloInputNormal="Actividad Comercial del Negocio" TituloInputSeleccion="Seleccionar Actividad"
            opcion1 = "Producción / Fabricación"
            opcion2 = "Comercio / Mayoreo"
            opcion3 = "Comercio / Minoreo"
            opcion4 = "Exportación"
            opcion5 = "Importación"
            opcion6 = "Servicios">
            </SelectActividad>
          </Row>

          <Row>
            <SelectCertif className="SeleccionarCertificaciones" TituloInputNormal="Seleccione Si Posee Alguna de estas Certificaciones SocioAmbientales" TituloInputSeleccion="Seleccione si posee o no posee "
            opcion1 = "Acuerdo de Producción Limpia"      opcion2 = "Alimento Vegano"
            opcion3 = "Biodegradabilidad"                 opcion4 = "Certificación Comercio Justo (FAIRTRADE)"
            opcion5 = "Certificación ISO"                 opcion6 = "Empresa Certificada B"
            opcion7 = "Fair For Life"                     opcion8 = "Forest Stewardship Council (FSC)"
            opcion9 = "Gestión de Residuos"               opcion10 = "Global Initiative Report"
            opcion11 = "Huella de Carbono"                opcion12 = "Non Gmo Project"
            opcion13 = "Respetuosos con Animales"         opcion14 = "Sello Producto Orgánico"
            opcion15 = "Sello S de Sustentabilidad"       opcion16 = "Otra"
            opcion17 = "No Cuento Con Sello Socioambiental">
            </SelectCertif>
          </Row>

          <Row>
            <SelectMotivacion className="SeleccionarMotivacion" TituloInputNormal="¿Qué Motivación Tienes al Tomar este Apoyo y Orientación sobre Gestión Sustentable?" TituloInputSeleccion="Seleccionar Motivación y Orientaición"
            opcion1 = "Iniciar el camino hacia la sustentabilidad"
            opcion2 = "Mejorar la gestión actual de mi empresa basada en el Triple Impacto"
            opcion3 = "Determinar los indicadores más idóneos de sustentabilidad para el negocio"
            opcion4 = "Obtener una política socioambiental ajustada al negocio"
            opcion5 = "Aumentar la red de proveedores y clientes sustentables"
            opcion6 = "Capacitarme en temas que afecten la operación del negocio"
            opcion7 = "Estar al día con le marco jurídico-normativo y regulatorio del país en cuestiones de sustentabilidad"
            opcion8 = "Preparar el negocio para una certificación socioambiental"
            opcion9 = "Recibir asesoría especializada">
            </SelectMotivacion>
          </Row>

          <Row>
            <SelectAlcances className="SeleccionarAlcances" TituloInputNormal="Elija los Alcances de la Medición de Impactoque Espera Obtener para el Negocio" TituloInputSeleccion="Seleccione los Alcances"
            opcion1 = "Modelo de Negocio"
            opcion2 = "Economía Circular"
            opcion3 = "Mayor Rentabilidad"
            opcion4 = "Impacto Social"
            opcion5 = "Impacto Ambiental"
            opcion6 = "Objetivos de Desarrollo Sostenible 2030">
            </SelectAlcances>
          </Row>

          <button class ="Button">Siguiente</button>
          </Form>
        </section>
      </div>
      </main>
    </body>
  </Fragment>
  )
}}
export default Hoja2