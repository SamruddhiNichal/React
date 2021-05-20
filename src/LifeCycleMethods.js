import React from 'react';

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

    render(){
        return(
            <div>
            <h1>This is a Component</h1>
            <p>Number is : {this.state.number}</p>
            <button type="button" onClick={this.handleChange}>Update</button>
            </div>
        )
    }
}

export default LifeCycleMethods