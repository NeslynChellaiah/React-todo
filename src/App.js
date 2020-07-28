import React, {useState} from 'react';
import Clock from './components/clock';
import Input from './components/input';
import Button from './components/button';
import Card from './components/card';

function App(){
    const [contents, setContents] = useState([]);

    const [data, setData] = useState("");

    function add(e) {
        if (!contents.includes(data)){
            setContents([...contents, data]);
            setData("");
            e.preventDefault();
        } else {
            setData("");
            e.preventDefault();
        }
    }

    function change(e) {
        setData(e.target.value);
    }

    function remove(e) {
        console.log();
        let index = parseInt(e.target.id);
        setContents(contents => contents.filter(content => contents.indexOf(content) !== index));
    }

    

    function card(content) {
        return <Card key={contents.indexOf(content)} id={contents.indexOf(content)} data={content} onClick={remove}/>
    }

    return <div className="container">
                <div className="row">
                    <div className='col-md-4'>
                        <Clock />
                        <form>
                            <Input type="text" placeholder="" value={data} onChange={change}/>
                            <Button value="Add" onClick={add}/>
                        </form> 
                    </div>
                    <div className='col-md-8'>
                        {contents.map(card)}    
                    </div>
                </div>
            </div>;
}


export default App;
