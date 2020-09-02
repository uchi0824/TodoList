import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { Todo } from './Todo'
import Axios from 'axios'

export const TodoPrivatePage = () => {
  const { data: todos } = useSWR('/api/user/{user}')
  const [ids, setIds] = useState([])

  if (!todos) {
    return <p>{'loading..'}</p>
  }
  if (todos.length === 0) {
    return <p>{'empty...'}</p>
  }
  const onDeleteTodos = async () => {
    const promises = ids.map((id) => {
      return Axios({ url: `/api/todo/${id}`, method: 'DELETE' })
    })
    await Promise.all(promises)
    window.location.reload()
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo
                checked={ids.includes(todo.id)}
                onCheck={() => {
                  const index = ids.indexOf(todo.id)
                  if (index === -1) {
                    const newIds = [...ids, todo.id]
                    setIds(newIds)
                    return
                  }
                  const newIds = [...ids]
                  newIds.splice(index, 1)
                  setIds(newIds)
                }}
                todo={todo}
              />
            </li>
          )
        })}
      </ul>
      <button
        className={
          'border px-4 bg-red-500 rounded-full hover:opacity-75 mb-3 mt-3'
        }
        onClick={onDeleteTodos}
      >
        チェックしたtodoを一括削除
      </button>
    </div>
  )
}
