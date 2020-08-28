import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { Todo } from './Todo'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const TodoPrivatePage = () => {
  const { data: todos } = useSWR('/api/user/{user}', fetcher)

  const [ids, setIds] = useState([])

  if (!todos) {
    return <p>{'loading..'}</p>
  }

  if (todos.length === 0) {
    return <p>{'empty...'}</p>
  }

  const onDeleteTodos = async () => {
    const promises = ids.map((id) => {
      return fetch(`/api/todo/${id}`, { method: 'DELETE' })
    })

    await Promise.all(promises)

    window.location.reload()
  }

  console.log(ids)

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
                  // A {ids}が{todo.id}を含まない → {ids}に{todo.id}を追加
                  if (index === -1) {
                    const newIds = [...ids, todo.id]
                    setIds(newIds)
                    return
                  }
                  // B {ids}が{todo.id}を含む → {ids}から{todo.id}を除外
                  // ids.splice({消したいインデックス}, 1)
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
