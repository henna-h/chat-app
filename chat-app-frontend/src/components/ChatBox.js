import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import messageService from '../services/messages'
import Message from './Message'

const MessageBox = styled.div`
  background: Black;
  width: 20em;
  height: 35em;
  position: relative;
  right: 5em;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 2em;
  align-items: center;
`

const Messages = styled.div`
  overflow: scroll;
  width: 20em;
  height: 25em;
  padding-bottom: 1em;
`

const MessageSpan = styled.span`
  position: absolute;
  bottom: 0.5em;
  display:inline-flex;
`

const Textarea = styled.textarea`
  width: 18em;
  height: 5em;
  background: Azure;
  color: black;
  overflow: scroll;
`

const MessageButton = styled.button`
  color: DarkCyan;
  background: Ivory;
  font-size: 1em;
  padding: 1em;
  border: none;
  border: 0.25em solid PowderBlue;
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
        <Messages>
        {messages.map(message => (
          <div key={message.id}>
            <Message user={message.user} content={message.content} />
          </div>
        ))}
        </Messages>
      <MessageSpan>
        <Textarea value={newContent} onChange={handleMessageChange}></Textarea>
        <MessageButton onClick={sendMessage}>Send</MessageButton>
      </MessageSpan>
      </MessageBox>
    </div>
  )
}

ChatBox.propTypes = {
  user: PropTypes.func.isRequired,
}

export default ChatBox