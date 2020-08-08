import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import useSWR from 'swr'

export const TodoCreate = () => {
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')

    const onCreate = async () => {
        try {
            console.log(title, deadline)
            const res = await fetch(`/api/todo`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, deadline }),
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
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="date"
                    name="deadline"
                    value={deadline}
                    onChange={(event) => setDeadline(event.target.value)}
                ></input>
                <button onClick={onCreate} disabled={title.length < 1}>
                    {'Create'}
                </button>
            </div>
        </div>
    )
}
