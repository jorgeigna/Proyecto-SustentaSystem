import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import {fas,faEnvelope} from "@fortawesome/free-solid-svg-icons"

function initFontAwesome() {
    library.add(fas,fab, faTwitterSquare, faFacebook, faLinkedin,faEnvelope);
}
export default initFontAwesome;