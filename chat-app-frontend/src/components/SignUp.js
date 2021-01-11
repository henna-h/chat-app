import React, { useState } from 'react'

const SignUp = () => {
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value)
  }

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value)
  }

  const registerAndLogin = (event) => {
    event.preventDefault()
    setNewUsername('')
    setNewPassword('')

  }

  return(
    <div>
      <h3>No account? Sign up!</h3>
      <form>
        <div>
          <input value={newUsername} onChange={handleNewUsernameChange} placeholder='username' />
        </div>
        <div>
          <input value={newPassword} onChange={handleNewPasswordChange} placeholder='password' />
        </div>
        <div>
          <input value={newPassword} onChange={handleNewPasswordChange} placeholder='repeat password' />
        </div>
        <button onClick={registerAndLogin} type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp