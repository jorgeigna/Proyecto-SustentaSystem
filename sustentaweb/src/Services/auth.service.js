import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
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
  register(
    auxNombre,
    auxApellido,
    auxCorreo,
    auxContraseña,
    auxNombreOrganizacion,
    auxArea,
    auxExtraArea,
    auxAñoForm,
    auxTelefono,
    auxPais,
    auxRegion,
    auxComuna,
    auxNFiscal,
    auxMontoFact,
    auxPagWeb,
    auxRedes,
    auxcompacc,
    auxnumwork,
    auxpfem,
    auxitype,
    auxindextra,
    auxaccomr,
    auxcertf,
    auxcerfextra,
    auxmotiv,
    auxalcan
  ) {
    return axios.post(API_URL + "signup", {
      auxNombre,
      auxApellido,
      auxCorreo,
      auxContraseña,
      auxNombreOrganizacion,
      auxArea,
      auxExtraArea,
      auxAñoForm,
      auxTelefono,
      auxPais,
      auxRegion,
      auxComuna,
      auxNFiscal,
      auxMontoFact,
      auxPagWeb,
      auxRedes,
      auxcompacc,
      auxnumwork,
      auxpfem,
      auxitype,
      auxindextra,
      auxaccomr,
      auxcertf,
      auxcerfextra,
      auxmotiv,
      auxalcan
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
