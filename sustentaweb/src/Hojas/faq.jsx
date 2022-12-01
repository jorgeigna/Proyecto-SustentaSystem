import React, { Component, Fragment } from "react";

import Accordion from "react-bootstrap/Accordion";

export default class Faq extends Component {
  /*pagina FAQ donde se contestan dudas comunes de los clientes*/
  render() {
    return (
      <Fragment>
        <div className="containerfaq">
          <div className="cardtittle">
            <h1 className="Title">FAQ</h1>
            <h5>
              en este apartado se contestan algunas de las dudas mas comunes de
              nuestros clientes
            </h5>
          </div>
          <Accordion id="acc">
            <Accordion.Item eventKey="0" className="achead">
              <Accordion.Header>¿que es un grupo vulnerable?</Accordion.Header>
              <Accordion.Body>
                Por grupo vulnerables se refiere a personas que sufren alguna
                brecha de oportunidad de desarrollo personal y profesional por
                su raza, color, orientación sexual, ideología, puestos en
                prisión, entre otros
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="achead">
              <Accordion.Header>¿que es un lider?</Accordion.Header>
              <Accordion.Body>
                Los líderes son los responsables en articular negocios que
                favorezcan a las personas al medioambiente y al planeta. La
                sustentablidad va más alla de la Ley o las normativas viegentes,
                tiene que ver con proposito y sentido de compromiso con las
                generaciones futuras.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="achead">
              <Accordion.Header>
                ¿por que son importante las certificaciones ambientales?
              </Accordion.Header>
              <Accordion.Body>
                aquellas empresas que logran alguna certificación socioambiental
                se vuelven más competitivas y desarrollan prácticas de mejora
                continua como una cultura permanente, así como, un compromiso a
                largo plazo por el planeta y la personas
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="achead">
              <Accordion.Header>¿por que medir el impacto?</Accordion.Header>
              <Accordion.Body>
                Es importante que los empresarios midan su impacto hoy en día
                porque eso ayuda a sostener una gestión basada en información
                sólida, verificable y sujeto a mejoras, los resulatdos de la
                medición permite tener una guía más clara para la cooperación y
                articularse con diferentes organizaciones por objetivos comunes,
                facilita el acceso a mejores mercados, mejores accesos a
                créditos de impacto y bonos verdes
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="achead">
              <Accordion.Header>¿que es un StakeHolder?</Accordion.Header>
              <Accordion.Body>
                En el mundo de los negocios, los stakeholders son aquellos
                individuos o grupos que tienen interés e impacto en una
                organización y en los resultados de sus acciones.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="achead">
              <Accordion.Header>
                ¿Qué es diversidad, inclusión y equidad en los negocios?
              </Accordion.Header>
              <Accordion.Body>
                El involucramiento con las partes interesadas, es sinónimo de
                diversidad, inclusión y equidad
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="achead">
              <Accordion.Header>
                ¿Qué es la economia circular?¿Qué no es economia circular?
              </Accordion.Header>
              <Accordion.Body>
                La economía circular es una estrategia que brinda oportunidades
                rentables para que las organizaciones puedan planificar y hacer
                eficientes sus procesos con el objetivo de convertir residuos en
                recursos, disminuyendo volatilidad de precios en materias primas
                y mejorando su relacionamiento con los grupos de interés. La
                economía circular tiene por objetivo reducir el impacto
                ambiental relacionado a la generación de residuos y promover un
                modelo de negocios diferente, proponiendo un cambio en los
                sistemas lineales de producción y consumo, incorporando el eco
                diseño, la reutilización, reciclaje y valorización.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="achead">
              <Accordion.Header>¿Qué son los ODS 2030?</Accordion.Header>
              <Accordion.Body>
                El mundo es un lugar complejo, cambiante; pero con problemas
                comunes. Desde esa complejidad, la Oraganización de las Naciones
                Unidas aprobó la Agenda 2030 sobre el Desarrollo Sostenible, una
                oportunidad para que los países y sus sociedades emprendan un
                nuevo camino con el que mejorar la vida de todos, sin dejar a
                nadie atrás. Incluye ámbitos económicos, ámbitos sociales,
                ámbitos ambientales
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="cardbottom">
            <h5 style={{ fontWeight: "bold" }}>
              si tienes otras preguntas no dudes en contactarnos
            </h5>
          </div>
        </div>
      </Fragment>
    );
  }
}
