import React from 'react'
import './bootstrap'
import { SWRConfig } from 'swr'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TodoPage } from './components/TodoPage'
import { UserPage } from './components/UserPage'
import { TodoPrivatePage } from './components/TodoPrivatePage'

function Example() {
  return (
    // https://swr.vercel.app/
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
      }}
    >
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
    </SWRConfig>
  )
}

ReactDOM.render(<Example />, document.getElementById('example'))
