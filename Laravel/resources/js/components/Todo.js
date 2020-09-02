import React, { useState } from 'react'
import Axios from 'axios'

export const Todo = ({ onCheck, checked, todo }) => {
  const [title, setTitle] = useState(todo.title)
  const [status, setStatus] = useState(todo.status)
  const [deadline, setDeadline] = useState(todo.deadline)

  const onUpdateTitle = () => {
    Axios({
      url: `/api/todo/${todo.id}`,
      method: 'PUT',
      data: { title },
    })
  }

  const onUpdateDeadline = () => {
    Axios({
      url: `/api/todo/${todo.id}`,
      method: 'PUT',
      data: { deadline },
    })
  }

  const onUpdateStatus = () => {
    Axios({
      url: `/api/todo/${todo.id}`,
      method: 'PUT',
      data: { status: status === 2 ? 1 : 2 },
    })
  }

  const onDelete = async () => {
    await Axios({
      url: `/api/todo/${todo.id}`,
      method: 'DELETE',
    })

    window.location.reload()
  }

  return (
    <div>
      <div>
        <p className={'text-orange-400'}>{todo.user_name}</p>
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
        <button
          className={'ml-4 border px-2'}
          onClick={() => {
            setStatus(status === 2 ? 1 : 2)
            onUpdateStatus()
          }}
        >
          {status === 2 ? '完了' : '未完'}
        </button>
        <input
          className={'ml-4'}
          type="checkbox"
          checked={checked}
          onChange={onCheck}
        />
        <button
          className={
            'border rounded-full px-4 hover:bg-red-500 hover:text-white ml-4'
          }
          onClick={onDelete}
        >
          {'削除'}
        </button>
      </div>
    </div>
  )
}
