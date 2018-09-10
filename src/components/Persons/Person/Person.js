import React,{Component} from 'react';
import classes from './Person.css'

class Person extends Component{

    constructor(props){
        super(props)
        console.log("[Person.js] from constructur")
      }
    
      componentWillMount(){
        console.log("[Person.js] from componentWillMount")
      }
    
      componentDidMount(){
        console.log("[Person.js] from componentDidMount")
      }
    render(){

        console.log("[Person.js] from render")
        return(
            <div className={classes.card}>
        <p  onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old</p>
        <input onChange={this.props.changed} value={this.props.name}/>
        
        </div>
        )
    }
}

export default Person;