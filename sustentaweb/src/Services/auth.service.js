import axios from "axios";

const API_URL = "http://localhost:8082/api/auth/";
class AuthService {
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
  logout() {
    localStorage.removeItem("user");
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  sendmail(mensaje) {
    return axios.post(API_URL + "ems", {
      mensaje,
    });
  }
}

export default new AuthService();
