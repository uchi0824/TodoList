import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// https://reactrouter.com/web/guides/quick-start
export const Router = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'}>
          <Home />
        </Route>
        <Route path={'/user'}>
          <Users />
        </Route>
      </Switch>
    </Router>
  )
}
