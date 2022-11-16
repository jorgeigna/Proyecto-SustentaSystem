import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Homep extends Component {
    render() {
        return (
            <Fragment>
            <header>
            <h1 style={{color:"white"}} >sustentaweb</h1>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to = "/faq">FAQ</Link>
                    </li>
                </ul>
            </header>
            
            </Fragment>  
            
        );
    }
}

export default Homep;