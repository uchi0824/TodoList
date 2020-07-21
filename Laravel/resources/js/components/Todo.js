import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todo: []
        };
    }
    componentDidMount() {
        axios
            .get('/api/todo')
            .then(response => {
                this.setState({
                    todo: response.data
                });

            }).catch(error => {
                console.log(error);
            });
    }
    render() {
        const list = this.state.todo.map((item) => {
            return <li key={item.id}>{item.title}</li>;
        });
        return (
            <div>
                <ul className="todo-list">
                    {list}
                </ul>
            </div>
        );
    }
}
}

if (document.getElementById('todo')) {
    ReactDOM.render(<Todo />, document.getElementById('todo'));
}
