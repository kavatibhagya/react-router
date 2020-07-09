import React, { Component } from "react";


class IdComponent extends Component{
    constructor(){
        super();
        this.onFocus=this.onFocus.bind(this);
        this.onBlur=this.onBlur.bind(this);

    }
    onFocus(){
        document.getElementById("myInput").setAttribute('class','highlight')
    }
    onBlur(){

    }

       render(){
           return(
               <div>
                   <input id="myInput"> </input>
               </div>
           );
       }
}