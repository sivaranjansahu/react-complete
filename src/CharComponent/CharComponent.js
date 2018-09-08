import React from 'react';

const charcomponent = (props) =>{
    let style = {
        display:'inline-block',
        margin:'16px',
        border:'1px solid #bbb',
        padding:'16px'
    }
    return(
        <span style={style}>{props.char}</span>
    )
}

export default charcomponent;