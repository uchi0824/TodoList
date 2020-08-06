import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'

function App() {
    return (
        <div style={{ margin: '2em' }}>
            <TodoList />
        </div>
    )
}

export default Example

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
