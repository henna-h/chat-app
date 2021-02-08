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
height: 100%;
align-items: center;
padding: 4em;
background: SeaShell
`

const App = () => {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [notification, setNotification] = useState(null)
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
      messageService.setToken(user.token)
    }
  }, [])


  const login = async (username, password) => {

    try{
      const user = await loginService.login({
        username, password,
      })
    
      window.localStorage.setItem(
        'loggedChatAppUser', JSON.stringify(user)
      )
    
      messageService.setToken(user.token)
      setUser(user)
      history.push('/')
      setNotification("Hi " + user.username + "!")
      setTimeout(() => {setNotification(null)}, 5*1000)
    } catch (exception) {
      setNotification('Wrong username or password')
      setTimeout(() => {setNotification(null)}, 5*1000)
    }
  }

  const logOut = async () => {
    window.localStorage.removeItem('loggedChatAppUser')
    setUser(null)
    setNotification("Logged out!")
    setTimeout(() => {setNotification(null)}, 3*1000)
  }

  const register = async (user) => {

    const usernames = users.map(user => user.username)

    if(usernames.includes(user.username)){
      setNotification('Username is already taken')
    } else if(user.username.length < 3 || user.password1.length < 3){
      setNotification('Username and password must be at least 3 characters long')
    } else if(user.password1 !== user.password2){
      setNotification('Make sure password fields match!')
    } else {

      setTimeout(() => {setNotification(null)})

      const newUser = {
        username: user.username,
        password: user.password1,
      }

      await userService.create(newUser)

      login(newUser.username, newUser.password) 

    }
  }

  return (
    <div>
      <Navbar user={user} logOut={logOut} />
      <Notification message={notification} />
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
