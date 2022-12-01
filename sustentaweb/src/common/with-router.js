import { useLocation, useNavigate, useParams } from "react-router-dom";
/*fubncion encargada de el routing de la pagina desde eventos agregando propiedades a las paginas mediante props*/
export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
};
