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
}
