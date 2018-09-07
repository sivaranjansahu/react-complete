import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Anil", age: 37 },
      { name: "Sanu", age: 33 },
      { name: "Ranjit", age: 34 },
    ],
    showPersons: false
  }

deletePersonHandler = (p)=>{
  console.log(p);
  let persons = this.state.persons;
  persons.splice(p,1);
  this.setState({persons:persons})
}

  nameChangedHandler = (event) => {
    this.setState({ persons: [event.target.value, "ranjan", "sahu"] })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }


  render() {
    let persons = null;
    if (this.state.showPersons === true) {
      persons =
        <div>
          {this.state.persons.map((d,i)=>{
           return <Person name={d.name} age={d.age} click={this.deletePersonHandler.bind(this,i)} />  
          })}
        </div>
    };


    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
