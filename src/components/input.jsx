import React from 'react';

function Input(props){
    return <input className="input" value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
}

export default Input;