import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// import { TestButton as Btna } from './testbutton'
import useSWR from 'swr'
import { Todo } from './Todo'
import { TodoCreate } from './TodoCreate'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function TodoPage() {
    const { data: todos } = useSWR('/api/todo', fetcher)

    if (!todos) {
        return <p>{'loading..'}</p>
    }

    if (todos.length === 0) {
        return <p>{'empty...'}</p>
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <TodoCreate />
            <ul className="todo-list">
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <Todo todo={todo} />
                        </li>
                    )
                })}
            </ul>
            {/* <Btna text="uchi"></Btna> */}
            {/* <Btna text="yoshi"></Btna> */}
        </div>
    )
}

if (document.getElementById('example')) {
    ReactDOM.render(<TodoPage />, document.getElementById('example'))
}
