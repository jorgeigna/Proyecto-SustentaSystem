import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
/*funcion encargada de iniciar las librerias fontawesome de los iconos de la pagina*/
function initFontAwesome() {
  library.add(fas, fab, faTwitterSquare, faFacebook, faLinkedin, faEnvelope);
}
export default initFontAwesome;
