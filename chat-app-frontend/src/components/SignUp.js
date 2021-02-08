import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`

const FormButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid;
  color: white;
  background: black;
`;

const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
`;


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

      const user = {
        username: username,
        password1: password1,
        password2: password2,
      }

      register(user)

  }

  return(
    <div>
      <Form>
      <h3>No account? Sign up!</h3>
        <div>
          <FormInput value={username} onChange={handleNewUsernameChange} placeholder='username' />
        </div>
        <div>
          <FormInput type='password' value={password1} onChange={handlePassword1Change} placeholder='password' />
        </div>
        <div>
          <FormInput type='password' value={password2} onChange={handlePassword2Change} placeholder='repeat password' />
        </div>
        <FormButton onClick={registerAndLogin} type='submit'>Sign up</FormButton>
      </Form>
    </div>
  )
}

SignUp.propTypes = {
  //users: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default SignUp