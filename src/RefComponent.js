import React, { Component } from "react";
import './App.css';


class RefComponent extends Component{
    
   
    onFocus(){
        this.myInput.setAttribute('class','highlight');
    }
    onBlur(){
         this.myInput.setAttribute('class','');
    }

       render(){
           return(
               <div>
                   <input ref={input =>{
                       this.myInput=input;
                   }}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}/> 
               </div>
           );
       }
}
export default RefComponent;