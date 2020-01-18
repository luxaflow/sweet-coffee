import React, { Component } from 'react';

export default class SweetCoffeeStatus extends Component {

    setStatusMessage(){

        if (!this.props.status) {
            return 'Klaar voor keuze';
        } else {
            return `Machine maakt ${this.props.status}`;
        }
    }
    
    render(){
        
        let statusMessage = this.setStatusMessage();
        
        return (

            <div className="Status">
                <p>{statusMessage}</p>
            </div>
        );
    }
}