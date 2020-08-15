import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import useSWR from 'swr'

export const Todo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title)
  const [status, setStatus] = useState(todo.status)
  const [deadline, setDeadline] = useState(todo.deadline)
  const [user_name, setUser_name] = useState(todo.user_name)

  const onUpdateTitle = () => {
    fetch(`/api/todo/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
  }

  const onUpdateDeadline = () => {
    fetch(`/api/todo/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deadline }),
    })
  }

  const onUpdateStatus = () => {
    fetch(`/api/todo/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: status === 2 ? 1 : 2 }),
    })
  }

  const onDelete = () => {
    alert('Delete!')
    fetch(`/api/todo/${todo.id}`, { method: 'DELETE' }).then((res) => {
      console.log(res)
      window.location.reload()
    })
  }

  return (
    <div>
      <div>
        <p className={'text-orange-400'}>{user_name}</p>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onBlur={onUpdateTitle}
        />
        <input
          className={`ml-2`}
          type="date"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
          onBlur={onUpdateDeadline}
        />
        <input
          className={'ml-4'}
          type="checkbox"
          checked={status === 2}
          onChange={() => {
            setStatus(status === 2 ? 1 : 2)
            onUpdateStatus()
          }}
        ></input>
        <button
          className={
            'border rounded-full bg-red-500 px-4 hover:bg-red-500 hover:text-white ml-4'
          }
          onClick={onDelete}
        >
          {'削除'}
        </button>
      </div>
    </div>
  )
}
