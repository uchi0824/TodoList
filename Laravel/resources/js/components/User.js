import React, { useState } from 'react'
import Axios from 'axios'

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
    const response = await Axios({
      url: `/api/user/${user.id}`,
      data: { password, confirmPassword, currentPassword },
      validateStatus: () => true,
    })

    if (response.status === 200) {
      alert('OK!')

      return window.location.reload()
    }
    alert(json.data.error)
  }

  const onDelete = async () => {
    const result = window.confirm('削除しますか？')
    if (!result) return
    await Axios({ url: `/api/user/${user.id}`, method: 'DELETE' })
    window.location.reload()
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
