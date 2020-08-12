import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TodoPage } from './TodoPage'
import { UserPage } from './UserPage'

// https://reactrouter.com/web/guides/quick-start
function Example() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <TodoPage />
        </Route>
        <Route exact path={'/user'}>
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

// function AppUser() {
// return (
// <div style={{ margin: '2em' }}>
// <UserAccount />
// </div>
// )
// }

// export default Example

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'))
}
