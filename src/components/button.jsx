import React from 'react';

function Button(props){
    return <input className="button" type="submit" value={props.value} onClick={props.onClick}/>
}

export default Button;