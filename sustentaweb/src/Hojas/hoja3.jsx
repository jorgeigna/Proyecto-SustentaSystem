import React, { Component, Fragment } from 'react';

class Hoja3 extends Component {
    n = 2;
    sumar(){
        window.alert("sumando a " + this.n);
        this.n = this.n+1
    }
    render() {
        return (
            <Fragment>
            <div>
            <a class = "lettest">
                a{this.n}
            </a>
            
            </div>
            <button class = "button" onClick={this.sumar}>mas</button>
            </Fragment>
        );
    }
}

export default Hoja3;