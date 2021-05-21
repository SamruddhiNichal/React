import React from 'react';

class  ComponentTwo  extends  React.Component{
    
    componentWillUnmount(){
        console.log("Component Two  Unmounting....");
    }


    render(){
        return(
            <div>
                <h1> ComponentTwo </h1>
                <p> This is ComponentTwo. </p>
            </div>
        )
    }
 }
 
 export default ComponentTwo