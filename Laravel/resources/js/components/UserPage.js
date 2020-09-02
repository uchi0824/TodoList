<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import useSWR from 'swr'
import { User } from './User'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function UserPage() {
    const { data: users } = useSWR('/api/user', fetcher)

    if (!todos) {
        return <p>{'loading..'}</p>
    }

    if (todos.length === 0) {
        return <p>{'empty...'}</p>
    }

    return (
        <div>
            <h1>account info</h1>
            <ul className="user-account">
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <User user={user} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

if (document.getElementById('example')) {
    ReactDOM.render(<UserPage />, document.getElementById('example'))
=======
import React from 'react'
import useSWR from 'swr'
import { User } from './User'

export const UserPage = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  return <p className={'text-orange-400'}>{'Hi, here is user page'}</p>
>>>>>>> feature/uchi
=======
  const { data: user } = useSWR('/api/user', fetcher)
=======
  const { data: user } = useSWR('/api/user')
>>>>>>> feature/uchi

  if (!user) {
    return <p>{'loading..'}</p>
  }

  if (user.length === 0) {
    return <p>{'empty...'}</p>
  }

  return (
    <div>
      <User user={user} />
    </div>
  )
>>>>>>> feature/uchi
}
