import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import messageService from '../services/messages'
import Message from './message'

const MessageBox = styled.div`
  background: Black;
  position: relative;
  right: 5em;
  margin: 0.25em 4em;
  padding: 1em 2em;
  align-items: center;
`

const MessageSpan = styled.span`
  margin: 1em;
  display: flex;
`

const Textarea = styled.textarea`
min-height: 3em;
padding: 0.5em;
display: flex;
margin: 0.5em;
background: black;
color: white;
border: none;
border-radius: 3px
`

const MessageButton = styled.button`
color: palevioletred;
background: transparent;
font-size: 1em;
border: none;
border-bottom: solid PowderBlue;
`

const Title = styled.h3`
  color: Ivory;
`

const ChatBox = ({ user }) => {
  const [messages, setMessages] = useState([])
  const [newContent, setNewContent] = useState('')

  console.log(user)

  useEffect(() => {
    messageService.getAll().then(messages =>
      setMessages( messages )
    )
  }, [])

  const handleMessageChange = (event) => {
    setNewContent(event.target.value)
  }

  const sendMessage = () => {
    console.log('user in sendMessage ' + user)

    let message = null

    if(user === null){
      message = {
        content: newContent,
        date: Date.now(),
        user: null
      }
    } else {
      message = {
        content: newContent,
        date: Date.now(),
        user: user
      }
    }
    messageService.send(message)
    setMessages(messages.concat(message))
    setNewContent('')
  }
  
  return (
    <div>
      <MessageBox>
        <Title>Start Chatting!</Title>
        {messages.map(message => (
          <div key={message.id}>
            <Message user={message.user} content={message.content} />
          </div>
        ))}
      </MessageBox>
      <MessageSpan><Textarea value={newContent} onChange={handleMessageChange}></Textarea><MessageButton onClick={sendMessage}>Send</MessageButton></MessageSpan>
    </div>
  )
}

ChatBox.propTypes = {
  user: PropTypes.func.isRequired,
}

export default ChatBox