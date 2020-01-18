import React, { Component } from 'react';


export default class ErrorMessage extends Component {

    render(){
        
        return(
            
            <div className="ErrorMessage">
                <p>Helaas is er een <br/>
                technische storing:<br/>
                {this.props.text}.<br/>
                Het maken van<br/>
                dranken is helaas niet<br/>
                mogelijk</p>
            </div>
        ) 
    }

    

}