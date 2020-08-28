import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TodoPage } from './TodoPage'
import { UserPage } from './UserPage'
import { TodoPrivatePage } from './TodoPrivatePage'

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
        <Route exact path={'/user/private'}>
          <TodoPrivatePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Example />, document.getElementById('example'))
