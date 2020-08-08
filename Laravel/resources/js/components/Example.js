import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import TodoList from './components/UserAccount'

function App() {
    return (
        <div style={{ margin: '2em' }}>
            <TodoList />
        </div>
    )
}

function AppUser() {
    return (
        <div style={{ margin: '2em' }}>
            <UserAccount />
        </div>
    )
}

export default Example

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
