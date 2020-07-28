import React, {useState} from 'react';

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    function inc(){
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(inc,1000)
    return <h1 id="clock">{time}</h1>  
}

export default Clock;