import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import loginService from './services/login'
import messageService from './services/messages'
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
  const history = useHistory()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
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
      'loggedBlogAppUser', JSON.stringify(user)
    )
  
    messageService.setToken(user.token)
    setUser(user)
    history.push('/')
  }

  const logOut = async () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    setUser(null)
  }


  return (
    <div>
      <Navbar user={user} logOut={logOut} />
      <Wrapper>
        <Switch>
        <Route path="/login">
          {user 
            ? <Redirect to="/" />
            : <Login login={login} /> 
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
