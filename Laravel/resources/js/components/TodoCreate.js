import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import useSWR from 'swr'

export const TodoCreate = () => {
  const [isPublic, setIsPublic] = useState('1')
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')

  const onCreate = async () => {
    try {
      console.log(isPublic, title, deadline)
      const res = await fetch(`/api/todo`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_public: isPublic, title, deadline }),
      })
      // window.location.reload()
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            checked={isPublic === '0'}
            onChange={() => setIsPublic('0')}
          />
          {'非公開'}
        </label>
        <label>
          <input
            type="radio"
            checked={isPublic === '1'}
            onChange={() => setIsPublic('1')}
          />
          {'公開'}
        </label>
        <input
          className={`ml-2`}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className={`ml-2`}
          type="date"
          name="deadline"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
        ></input>
        <button
          className={
            'border rounded-full px-4 hover:bg-blue-500 hover:text-white ml-4'
          }
          onClick={onCreate}
          disabled={title.length < 1}
        >
          {'Create'}
        </button>
      </div>
    </div>
  )
}
