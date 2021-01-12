import React, { useState } from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'

const Login = ({ login }) => {
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
      try{
        login(username, password)

      } catch (exception) {
        console.log('Wrong username or password')
      }
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default Login