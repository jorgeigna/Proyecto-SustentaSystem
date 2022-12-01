import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";
class AuthService {
  //conexion con el sistema login de usuario mediante promesas axio
  login(Correo, Contraseña) {
    return axios
      .post(API_URL + "signin", {
        Correo,
        Contraseña,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  register(Nombre, Correo, Contraseña) {
    return axios.post(API_URL + "signup", {
      Nombre,
      Correo,
      Contraseña,
    });
  }
  //conexion para registrar la tabla de caracteristicas del cliente en la base mongo mediante promesas axio
  registercarac(
    Correo,
    Apellido,
    NombreOrganizacion,
    Area,
    ExtraArea,
    AñoForm,
    Telefono,
    Pais,
    Region,
    Comuna,
    NFiscal,
    MontoFact,
    divisa,
    PagWeb,
    Redes,
    compacc,
    numwork,
    pfem,
    itype,
    indextra,
    accomr,
    certf,
    cerfextra,
    motiv,
    alcan,
    Lvl
  ) {
    return axios.post(API_URL + "sigcarac", {
      Correo,
      Apellido,
      NombreOrganizacion,
      Area,
      ExtraArea,
      AñoForm,
      Telefono,
      Pais,
      Region,
      Comuna,
      NFiscal,
      MontoFact,
      divisa,
      PagWeb,
      Redes,
      compacc,
      numwork,
      pfem,
      itype,
      indextra,
      accomr,
      certf,
      cerfextra,
      motiv,
      alcan,
      Lvl,
    });
  }
  //conexion con el sistema de registro de respuestas en la base mongo mediante promesas axio
  registresp(
    Correo,
    resp1,
    resp2,
    resp3,
    resp4,
    resp5,
    resp6,
    resp7,
    resp8,
    resp9,
    resp10
  ) {
    return axios.post(API_URL + "sigresp", {
      Correo,
      resp1,
      resp2,
      resp3,
      resp4,
      resp5,
      resp6,
      resp7,
      resp8,
      resp9,
      resp10,
    });
  }
  //funcion de cierre de sesion en la cual se elimina la sesion de la localstorage
  logout() {
    localStorage.removeItem("user");
  }
  //funcion que obtiene el usuario de la sesion actual iniciada
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
// funcion encargada de enviar el correo para el caso de menor nivel de dominio de sustentabilidad
  sendmail(mensaje) {
    return axios.post(API_URL + "ems", {
      mensaje,
    });
  }
}

export default new AuthService();
