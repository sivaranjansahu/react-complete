import React from 'react';

const Cockpit = (props) => {
    return (
        <div>
            <button onClick={props.togglepersons}>Toggle</button>
            {props.persons}
        </div>
    )
}

export default Cockpit;