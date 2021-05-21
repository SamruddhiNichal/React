import React from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number : 1
        }
    }

    componentDidMount(){
        console.log("In Component Did Mount : "+ this.state.number);
    }

    componentDidUpdate(){
        console.log("In Component Did Update : "+ this.state.number);
    }

    handleChange=()=>{
        this.setState({number:this.state.number+1})

    
    }
    switchComponent=()=>{
        this.setState({number:this.state.number === 0 ? 1:0})
    }

    render(){
        let component = this.state.number ? <ComponentOne/>:<ComponentTwo/> ;
        return(
            <div>
            <h1>This is a Component</h1>
            <p>Number is : {this.state.number}</p>
            {component}
            <button type="button" onClick={this.handleChange}>Update</button>
            <button type ="button" onClick={this.switchComponent}>Switch</button>
            
            </div>
        )
    }
}

export default LifeCycleMethods