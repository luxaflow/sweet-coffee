import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import StateContext from '../context/StateContext';

export default class SweetCoffeeSlider extends Component {

    static contextType = StateContext;

    render() {

        let disabled = this.context.menuDisabled;

        if (this.context.capacity.milk < 1 && this.props.name == 'Melk') {
            disabled = true;
        } else if (this.context.capacity.sugar < 1 && this.props.name == 'Suiker') {
            disabled = true;
        }
        
        // slider has to be in render to work correctly.
        // attempted to move to constructor, but this causes errors
        const SweetCoffeeSlider = withStyles({
            root: {
                color: '#797F95',
                height: 8,
                width: "85%",
                margin: "auto 18px"
            },
            thumb: {
                height: 24,
                width: 24,
                backgroundColor: '#797F95',
                border: '2px solid #9095AE',
                marginTop: -8,
                marginLeft: -12,
                '&:focus,&:hover,&$active': {
                    boxShadow: 'inherit',
                },
            },
            active: {},
            valueLabel: {
                left: 'calc(-50% + 4px)',
            },
            track: {
                height: 8,
                borderRadius: 1,
            },
            rail: {
                height: 8,
                borderRadius: 4,
            },
        })(Slider);

        return (
            
            <div className="SliderContainer">
                <p>{this.props.name}</p><br />
                <SweetCoffeeSlider
                    disabled={disabled}
                    valueLabelDisplay="auto"
                    onTouchEnd={this.props.handleChange}
                    defaultValue={this.props.value} 
                />
            </div>
        );
    }

}