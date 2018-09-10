import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props){
        super(props)
        console.log("[Persons.js] from constructur")
      }
    
      componentWillMount(){
        console.log("[Persons.js] from componentWillMount")
      }
    
      componentDidMount(){
        console.log("[Persons.js] from componentDidMount")
      }

      componentWillReceiveProps(nextProps){
          console.log("Update [Persons.js] from componentWillReceiveProps")
      }

      shouldComponentUpdate(nProp,nState){
        console.log("Update [Persons.js] from shouldComponentUpdate");
        return true;
      }

    render() {
        console.log("[Persons.js] from render")
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={(index) => this.props.delete(index)}
                changed={(event) => this.props.namechange(event, person.id)}
            />
        }
        )

    }
}
export default Persons;