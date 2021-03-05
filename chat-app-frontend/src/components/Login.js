import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const FormContainer = styled.div`
position: relative;
margin-top: 4em;
margin-left: 37%;
padding: 1em 2em;
align-items: center;
display: block;
`

const Form = styled.form`
  display: inline-block;
  align-items: center;
  text-align: center;
`

const FormButton = styled.button`
  font-size: 1em;
  font: 14px/22px "Lato", Arial, sans-serif;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  border: 2px solid;
  color: white;
  background: black;
  float: center;
  &:hover ${FormButton} {
    color: PowderBlue;
  }
`

const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 0 1.7px;
`

const H2 = styled.h2`
  font: "Lato", Arial, sans-serif;
  float: center;
`


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
      login(username, password)
    }

    return (
      <FormContainer>
        <Form>
        <H2>Sign in!</H2>
          <div>
            <FormInput value={username} onChange={handleUsernameChange} placeholder='username' />
          </div>
          <div>
            <FormInput type='password' value={password} onChange={handlePasswordChange} placeholder='password' />
          </div>
            <FormButton onClick={loginUser} type='submit'>Login</FormButton>
          <div><a href="/#/signup">No account? Sign up!</a></div>
        </Form>
      </FormContainer>
    )
}

Login.propTypes = {
  users: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default Login