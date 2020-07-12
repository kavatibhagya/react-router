import React, { Component } from 'react';
import { AppContext } from './AppProvider';
import './App.css';


const Green = () => (

    <div className="green">
        <AppContext.Consumer>
           {(context) => context.number}
        </AppContext.Consumer>

    </div>
)
const Blue = () => (
    <div className="blue">
         <AppContext.Consumer>
           {(context) => context.number}
        </AppContext.Consumer>
        <Green />
    </div>
)
class Red extends Component{
    render(){
        return(
            <div className="red">
            <AppContext.Consumer>
                {(context) => context.number}

            </AppContext.Consumer>
            <Blue />

        </div>
        );
    }

} 
export default Red;