import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import Notification from './components/Notification'
import loginService from './services/login'
import messageService from './services/messages'
import userService from './services/users'
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom"

const Wrapper = styled.div`
position: relative;
width: 100%;
align-items: center;
padding: 4em;
background: SeaShell
`

const App = () => {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    userService.getAll().then(users =>
      setUsers( users )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedChatAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      console.log('setUser:' + user)
      messageService.setToken(user.token)
      console.log("logged in user: " + user.username)
    }
  }, [])


  const login = async (username, password) => {
    console.log('login')
    const user = await loginService.login({
      username, password,
    })
  
    window.localStorage.setItem(
      'loggedChatAppUser', JSON.stringify(user)
    )
  
    messageService.setToken(user.token)
    setUser(user)
    history.push('/')
  }

  const logOut = async () => {
    window.localStorage.removeItem('loggedChatAppUser')
    setUser(null)
  }

  const register = async (user) => {
    await userService.create(user) 
  }
  console.log('user in App: ' + user)

  return (
    <div>
      <Navbar user={user} logOut={logOut} />
      <Notification message="hello" />
      <Wrapper>
        <Switch>
        <Route path="/login">
          {user 
            ? <Redirect to="/" />
            : <Login login={login} register={register} users={users} /> 
          }
          </Route>
          <Route path="/">
            <ChatBox user={user} />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  )
}

export default App
