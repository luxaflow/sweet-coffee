import React, { Component } from 'react';

import SweetCoffeeButton from './SweetCoffeeButton';

import ButtonContext from '../context/ButtonContext';

export default class SweetCoffeeButtons extends Component {

    static contextType = ButtonContext;

    render(){

        return(
            <div>
                <div className="Spacing" />

                <div className="Buttons">
                    <SweetCoffeeButton 
                        name="Americano" 
                        handleOnClick={
                            (sugar, milk)=> {
                                this.context.makeAmericano(milk,sugar);
                            }
                        }
                    />

                    <SweetCoffeeButton 
                        name="Cappucino" 
                        handleOnClick={
                            (sugar, milk) => {
                                this.context.makeCapoccino(sugar, milk);
                            }
                        }
                    />

                    <SweetCoffeeButton 
                        name="Wiener Melange" 
                        handleOnClick={
                            (sugar, milk) => {
                                this.context.makeWienerMelange(sugar, milk);
                            }
                        }
                    />

                    <SweetCoffeeButton 
                        name="Chololade"
                        handleOnClick={
                            (sugar, milk) => {
                                this.context.makeChoco(sugar, milk);
                            }
                        }
                    />

                    <SweetCoffeeButton 
                        name="Zwarte Thee" 
                        handleOnClick={
                            (sugar, milk) => {
                                this.context.makeBlackTea(sugar, milk);
                            }
                        }
                    />

                    <SweetCoffeeButton 
                        name="Earl Grey" 
                        handleOnClick={
                            (sugar, milk) => {
                                this.context.makeEarlGray(sugar, milk);
                            }
                        }    
                    />
                </div>
            </div>
        );
    }
}