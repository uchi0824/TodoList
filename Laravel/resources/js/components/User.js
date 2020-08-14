import React, { useState } from 'react'

export const User = ({ user }) => {
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')

  const onUpdatePassword = () => {
    if (password !== confirmpassword) {
      alert('パスワードが一致しません')
      return
    }
    if (password === '' || confirmpassword === '' || currentPassword === '') {
      alert('パスワードが入力されていません')
      return
    }
    fetch(`/api/user/${user.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, confirmpassword, currentPassword }),
    })
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
      <div>
        <input
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
          placeholder={'現在のパスワード'}
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={'新しいパスワード'}
        />
        <input
          value={confirmpassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder={'新しいパスワード(確認用)'}
        />
        <button
          className={
            'border rounded-full  px-4 hover:bg-blue-500 hover:text-white ml-4'
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
          {'アカウント削除'}
        </button>
      </div>
    </div>
  )
}
