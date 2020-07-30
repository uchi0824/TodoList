import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import {TestButton as Btna} from './testbutton';

export default function Todo() {
    const [todo,setTodo] = useState([]);

    // axios
    //     .get('/api/todo')
    //     .then(response => {
    //         setTodo(response.data);


    //     }).catch(error => {
    //         console.log(error);
    //     });

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/api/todo');
            setTodo(res.data);
        };

        fetchData();
      }, []);

    return (
        <div>fuga
            <ul className="todo-list">
                {todo.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
            <Btna text="uchi"></Btna>
            <Btna text="yoshi"></Btna>
        </div>
    );
}


if (document.getElementById('example')) {
    ReactDOM.render(<Todo />, document.getElementById('example'));
}
