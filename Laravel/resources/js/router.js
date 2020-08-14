import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
