import React, { Component } from 'react';
import StateContext from '../context/StateContext';

export default class SweetCoffeeButton extends Component {

    static contextType = StateContext;

    render(){

        let sugar = (this.context.sugar / 100);
        let milk = (this.context.milk / 100);
        
        return(
            
            <input 
                type="button" 
                className="Button" 
                disabled={this.context.menuDisabled} 
                value={this.props.name}
                onClick={() => {
                    this.props.handleOnClick(sugar, milk);
                }}
            />
        );
    }
} 