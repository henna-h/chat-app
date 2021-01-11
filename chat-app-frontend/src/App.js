import React from 'react'
import styled from 'styled-components'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ChatBox from './components/ChatBox'
import {
  Switch,
  Route,
} from "react-router-dom"

const Wrapper = styled.div`
position: relative;
width: 100%;
align-items: center;
padding: 4em;
background: SeaShell
`

const App = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <ChatBox />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  )
}

export default App
