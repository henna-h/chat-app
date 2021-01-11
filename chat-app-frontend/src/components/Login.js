import React, { useState } from 'react'
//import styled from 'styled-components'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const loginUser = (event) => {
        event.preventDefault()
        setUsername('')
        setPassword('')
    }

    return (
      <div>
          <h3>Sign in!</h3>
        <form>
          <div>
            <input value={username} onChange={handleUsernameChange} placeholder='username' />
          </div>
          <div>
            <input value={password} onChange={handlePasswordChange} placeholder='password' />
          </div>
            <button onClick={loginUser} type='submit'>Login</button>
        </form>
      </div>
    )
}

export default Login