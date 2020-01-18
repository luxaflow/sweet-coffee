import React, { Component } from 'react';

import ErrorMessage from './ErrorMessage';

export default class ErrorComponent extends Component {

    setErrorMessage = () => {
        switch(this.props.errorCode){
            case 1: 
                console.log('Geen water');
                return 'Geen waterdruk';
            case 2: 
                console.log('Interne status fout');
                return 'Machine is kapot';
            case 3: 
                console.log('Temperatuur te laag');
                return 'Machine is kapot';
            default:
                return null;
        }
    }

    render(){
        
        let errorMessage = this.setErrorMessage();

        return(
            <div className="ErrorComponent">
                <ErrorMessage text={errorMessage} />
            </div>
        )

    }
}