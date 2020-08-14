import React from 'react'
import useSWR from 'swr'
import { User } from './User'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const UserPage = () => {
  const { data: user } = useSWR('/api/user', fetcher)

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
}
