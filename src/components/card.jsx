import React from 'react';

function Card(props){
    return <div className="cards" onClick={props.onClick} id={props.id}><p>{props.data}</p></div>
}

export default Card;               