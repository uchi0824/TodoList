import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { Todo } from './Todo'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const TodoPrivatePage = () => {
  const { data: todos } = useSWR('/api/user/{user}', fetcher)

  if (!todos) {
    return <p>{'loading..'}</p>
  }

  if (todos.length === 0) {
    return <p>{'empty...'}</p>
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo todo={todo} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
