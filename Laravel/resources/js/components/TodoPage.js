import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import useSWR from 'swr'
import { Todo } from './Todo'
import { TodoCreate } from './TodoCreate'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const TodoPage = () => {
  const { data: todos } = useSWR('/api/todo', fetcher)

  const [ids, setIds] = useState([])

  // const currentStatus = 1

  const [currentFilter, setCurrentFilter] = useState(null)

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

  console.log('選択したToDo', ids)

  const currentTodos = todos.filter((todo) => {
    if (currentFilter === 'done') {
      return todo.status === 2
    }

    if (currentFilter === 'in-progress') {
      return todo.status === 1
    }

    if (currentFilter === 'deadline') {
      return new Date(todo.deadline) < new Date()
    }

    return true
  })

  return (
    <div>
      <h1 className={'mb-4'}>新規ToDo作成</h1>
      <TodoCreate />
      <h1 className={'mb-3 mt-3'}>ToDoList</h1>
      <button
        className={`border rounded-full px-4 hover:bg-blue-500 hover:text-white ml-2`}
        onClick={() => setCurrentFilter(null)}
      >
        全て表示
      </button>
      <button
        className={`border rounded-full px-4 hover:bg-blue-500 hover:text-white ml-2`}
        onClick={() => setCurrentFilter('in-progress')}
      >
        未完表示
      </button>
      <button
        className={`border rounded-full px-4 hover:bg-blue-500 hover:text-white ml-2`}
        onClick={() => setCurrentFilter('done')}
      >
        完了表示
      </button>
      <button
        className={`border rounded-full px-4 hover:bg-blue-500 hover:text-white ml-2`}
        onClick={() => setCurrentFilter('deadline')}
      >
        期限切れ表示
      </button>
      <ul className={`mt-3`}>
        {currentTodos.map((todo) => {
          return (
            <li key={todo.id}>
              {/* checked: {ids}が{todo.id}を持っているかどうか */}
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
      >
        チェックしたtodoを一括削除
      </button>
    </div>
  )
}
