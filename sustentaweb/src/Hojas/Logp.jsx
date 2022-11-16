import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import css from "../css/logcss.css"

class Logp extends Component {
    render() {
        return (
         <Fragment>
            <header>
                <h1 style={{color:"white"}} >sustentaweb</h1>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                </ul>

            </header>
            <section id = "logform">
            <main>
                <form>
                <h1 className="h3 mb-3 fw-normal">Ingrese sus datos</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label htmlFor="floatingInput">Email address</label>
                </div>  
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div>
                    <h1>si no tienes cuenta </h1>
                    <h1><Link to ="/registro/pag1">registrate</Link></h1>
                </div>
                </form>
            </main>
            </section>
         </Fragment>
        );
    }
}

export default Logp;