
import React from 'react' ;

class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log("Component One Unmounting....");
    }

   render(){
       return(
           <div>
               <h1> ComponentOne </h1>
               <p> This is ComponentOne. </p>
           </div>
       )
   }
}

export default ComponentOne