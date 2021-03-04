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
  align-items: center;
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
  &:hover ${FormButton} {
    color: PowderBlue;
  }
`

const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: LightGray;
  border: none;
  border-radius: 3px;
`

const H2 = styled.h2`
  font: "Lato", Arial, sans-serif;
`


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
      <FormContainer>
        <Form>
          <H2>No account? Sign up!</H2>
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
      </FormContainer>
    </div>
  )
}

SignUp.propTypes = {
  //users: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
}

export default SignUp