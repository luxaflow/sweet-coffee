import React, { Component } from 'react';

export default class SweetCoffeeStatus extends Component {

    constructor(props){
        super(props);
        this.statusMessage;
    }

    setStatusMessage(){

        if (this.props.status == null) {
            return 'Klaar voor keuze';
        } else {
            return `Machine maakt ${this.props.status}`;
        }
    }
    
    render(){        

        this.statusMessage = this.setStatusMessage();

        return (
            <div className="Status">
                <p>{this.statusMessage}</p>
            </div>
        );
    }
}