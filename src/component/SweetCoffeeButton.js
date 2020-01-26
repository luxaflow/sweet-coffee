import React, { Component } from 'react';
import StateContext from '../context/StateContext';
import { Dialog } from '@material-ui/core';

export default class SweetCoffeeButton extends Component {

    static contextType = StateContext;

    render(){

        let sugar = this.context.sugar;
        let milk = this.context.milk;

        let disabled = this.context.menuDisabled;

        if ((this.context.capacity.milk < 1 || this.context.capacity.sugar < 1) && this.props.name == 'Cappucino') {
            disabled = true;
        } else if (this.context.capacity.chocolade <= 0 && (this.props.name == 'Chocolade' || this.props.name == 'Wiener Melange')) {
            disabled = true;
        } 
        
        return(
            
            <input 
                type="button" 
                className="Button" 
                disabled={disabled} 
                value={this.props.name}
                onClick={() => {
                    this.props.handleOnClick(sugar, milk);
                }}
            />
        );
    }
} 