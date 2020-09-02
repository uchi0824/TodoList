import React from 'react'
import useSWR from 'swr'
import { User } from './User'

export const UserPage = () => {
  const { data: user } = useSWR('/api/user')

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
