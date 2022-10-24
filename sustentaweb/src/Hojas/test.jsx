import React, { Component, Fragment } from 'react';

class Test extends Component {
     nextF(){
        window.alert("Bienvenido a nuestro sitio web");

    }
    render() {

        return (
            <Fragment>
   
            <div>
           test     
            </div>

            <button onClick={this.nextF}>test button</button>
            </Fragment>
        );
    }
}

export default Test;