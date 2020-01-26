import React, { Component } from 'react';

export default class SweetCoffeeStatus extends Component {

    constructor(props){
        super(props);
        this.statusMessage = this.setStatusMessage();
    }

    setStatusMessage(){

        if (!this.props.status) {
            return 'Klaar voor keuze';
        } else {
            return `Machine maakt ${this.props.status}`;
        }
    }
    
    render(){        
        return (
            <div className="Status">
                <p>{this.statusMessage}</p>
            </div>
        );
    }
}