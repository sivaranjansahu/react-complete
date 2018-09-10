import React, { Component } from 'react';
import styleclasses from './App.css';
//import Person from '../components/Person/Person'
import Persons from '../components/Persons/Persons'
//import TextCount from '../components/TextCount/TextCount';
import Char from '../components/CharComponent/CharComponent';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {

  constructor(props){
    super(props)
    console.log("[App.js] from constructur")
  }

  componentWillMount(){
    console.log("[App.js] from componentWillMount")
  }

  componentDidMount(){
    console.log("[App.js] from componentDidMount")
  }
  state = {
    persons: [
      { id: 'd123d', name: "Anil", age: 37 },
      { id: 'f2342', name: "Sanu", age: 33 },
      { id: '41f34', name: "Ranjit", age: 34 },
    ],
    showPersons: false,
    textlength: 0
  }

  deletePersonHandler = (p) => {
    console.log(p);
    let persons = this.state.persons;
    persons.splice(p, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    console.log(id);
    let newpersons = [...this.state.persons];
    let index = newpersons.findIndex((item) => {
      return item.id === id;
    })
    newpersons[index].name = event.target.value;
    console.log(newpersons);
    this.setState({ persons: newpersons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  charsArray = [];
  textCountInputHandler = (event) => {
    this.setState({ textlength: event.target.value.length });
    let inputarray = Array.from(event.target.value)
    this.charsArray = inputarray.map((char) => {
      return <Char char={char} />
    })
  }

  render() {
    console.log("[App.js] from render")
    let persons = null;
    if (this.state.showPersons === true) {
      persons =
      <Persons 
      persons={this.state.persons} 
      namechange={this.nameChangedHandler} 
      delete = {this.deletePersonHandler}
      />
    };

    return (
      <div className={styleclasses.App}>
        <Cockpit togglepersons = {this.togglePersonsHandler} persons={persons} />
        
      </div>
    );
  }
}

export default App;
