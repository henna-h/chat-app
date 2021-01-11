import React, { useState } from 'react'
import styled from 'styled-components'

const MessageBox = styled.div`
  background: Black;
  position: relative;
  right: 5em;
  margin: 0.25em 4em;
  padding: 1em 2em;
  align-items: center;
`
const Message = styled.div`
  margin: 1em;
  color: Azure
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

const ChatBox = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const sendMessage = () => {
    setMessages(messages.concat(newMessage))
    setNewMessage('')
  }
  
  return (
    <div>
      <MessageBox>
        <Title>Start Chatting!</Title>
        {messages.map(message => (
          <div key={message}>
            <Message>anonymous: <div>{message}</div></Message>
          </div>
        ))}
      </MessageBox>
      <MessageSpan><Textarea value={newMessage} onChange={handleMessageChange}></Textarea><MessageButton onClick={sendMessage}>Send</MessageButton></MessageSpan>
    </div>
  )
}

export default ChatBox