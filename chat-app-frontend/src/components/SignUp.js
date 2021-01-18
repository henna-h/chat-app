import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SignUp = ({ register }) => {
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const handleNewUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value)
  }

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value)
  }

  const registerAndLogin = (event) => {
    event.preventDefault()
    /*

    if(password1 !== password2){
      return console.log('Make sure password fields match!')
    }

    if(username.length < 3 || password1.length < 3){
      return console.log('Username and password must be at least 3 characters long')
    }

    const usernames = users.map(user => user.username)

    if(usernames.includes(username)){
      return console.log('Username is already taken')
    }
    */

    const user = {
      username: username,
      password: password1,
    }

    register(user)
    console.log('after register')
    
    //login(username, password1)

  }

  return(
    <div>
      <h3>No account? Sign up!</h3>
      <form>
        <div>
          <input value={username} onChange={handleNewUsernameChange} placeholder='username' />
        </div>
        <div>
          <input type='password' value={password1} onChange={handlePassword1Change} placeholder='password' />
        </div>
        <div>
          <input type='password' value={password2} onChange={handlePassword2Change} placeholder='repeat password' />
        </div>
        <button onClick={registerAndLogin} type='submit'>Sign up</button>
      </form>
    </div>
  )
}

SignUp.propTypes = {
  users: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default SignUp