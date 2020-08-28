import React, { useState } from 'react'

export const User = ({ user }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')

  const onUpdatePassword = async () => {
    if (password !== confirmPassword) {
      alert('パスワードが一致しません')
      return
    }
    if (password === '' || confirmPassword === '' || currentPassword === '') {
      alert('パスワードが入力されていません')
      return
    }
    const response = await fetch(`/api/user/${user.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, confirmPassword, currentPassword }),
    })

    console.log(response)

    if (response.status === 200) {
      alert('OK')

      return window.location.reload()
    }

    const json = await response.json()

    console.log(json)

    alert(json.error)
  }

  const onDelete = () => {
    const result = window.confirm('削除しますか？')
    if (!result) return
    fetch(`/api/user/${user.id}`, { method: 'DELETE' }).then((res) => {
      console.log(res)
      window.location.reload()
    })
  }

  return (
    <div>
      <h1 className={`mb-3`}>パスワード更新</h1>
      <div>
        <input
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
          placeholder={'現在のパスワード'}
        />
        <input
          className={`ml-2`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={'新しいパスワード'}
        />
        <input
          className={`ml-2`}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder={'新しいパスワード(確認用)'}
        />
        <button
          className={
            'border rounded-full bg-blue-500  px-4 hover:bg-blue-500 hover:text-white ml-4'
          }
          onClick={onUpdatePassword}
        >
          {'更新'}
        </button>
      </div>
      <div>
        <button
          className={
            'border rounded-full bg-red-500 px-4 hover:bg-red-600 hover:text-white mt-4'
          }
          onClick={onDelete}
        >
          {'アカウントを削除'}
        </button>
      </div>
    </div>
  )
}
