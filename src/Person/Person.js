import React from 'react';


const person =(props)=>{

    return (
        <div onClick={props.click}>
        <p>My name is {props.name} and I am {props.age} years old</p>
        
        </div>
    );
}

export default person;