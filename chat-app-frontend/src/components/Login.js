import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SignUp from './SignUp'
import styled from 'styled-components'


const FormContainer = styled.div`
  margin-left: 35%;
  margin-right: 35%;
  align-items: center;
`

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


const Login = ({ login, users, register }) => {
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
      login(username, password)
    }

    return (
      <FormContainer>
        <Form>
        <h3>Sign in!</h3>
          <div>
            <FormInput value={username} onChange={handleUsernameChange} placeholder='username' />
          </div>
          <div>
            <FormInput type='password' value={password} onChange={handlePasswordChange} placeholder='password' />
          </div>
            <FormButton onClick={loginUser} type='submit'>Login</FormButton>
        </Form>

        <SignUp login={login} users={users} register={register} />
      </FormContainer>
    )
}

Login.propTypes = {
  users: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default Login