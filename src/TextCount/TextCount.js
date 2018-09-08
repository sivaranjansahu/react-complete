import React from 'react';
import Char from '../CharComponent/CharComponent'

const textcount = (props) => {
    let warning = null;
    if(props.count > 5){
        warning = <div>More than 5 characters!</div>
    }else{
        warning = <div>You are good!</div>
    }
    

    return (
        <div>
        <div>length : {props.count}</div>
        {warning}
        
        </div>
    );

}

export default textcount;