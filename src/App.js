import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 'd123d', name: "Anil", age: 37 },
      { id: 'f2342', name: "Sanu", age: 33 },
      { id: '41f34', name: "Ranjit", age: 34 },
    ],
    showPersons: false
  }

  deletePersonHandler = (p) => {
    console.log(p);
    let persons = this.state.persons;
    persons.splice(p, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event,id) => {
    console.log(id);
    let newpersons = [...this.state.persons];
    let index = newpersons.findIndex((item)=>{
      return item.id===id;
    })
    newpersons[index].name=event.target.value;
    console.log(newpersons);
    this.setState({ persons: newpersons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }


  render() {
    let persons = null;
    if (this.state.showPersons === true) {
      persons =
        <div>
          {this.state.persons.map((d, i) => {
            return <Person
              key={d.id} 
              name={d.name}
              age={d.age}
              //click={this.deletePersonHandler.bind(this, i)}
              changed={(event)=>this.nameChangedHandler(event,d.id)}
            />
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
