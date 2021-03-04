import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import messageService from '../services/messages'
import Message from './Message'

const MessageBox = styled.div`
  background: Black;
  width: 30em;
  height: 35em;
  position: relative;
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 2em;
  align-items: center;
  display: block;
  border-radius: 5px;
`

const Messages = styled.div`
  overflow: scroll;
  width: 29em;
  height: 30em;
  padding-bottom: 1em;
`

const MessageSpan = styled.span`
  position: absolute;
  bottom: 0.5em;
  display:inline-flex;
`

const Textarea = styled.textarea`
  width: 20em;
  min-height: 4.5em;
  border: none;
  padding: 10px 20px;
  font: 14px/22px "Lato", Arial, sans-serif;
  margin-bottom: 10px;
  border-radius: 5px;
  resize: none;
`

const MessageButton = styled.button`
  height: 4.5em;
  color: Black;
  background: PowderBlue;;
  font-size: 1em;
  padding: 1em;
  border: none;
  border-radius: 5px;
  &:hover ${MessageButton} {
    background: DarkCyan;
  }
  }
`

const ChatBox = ({ user }) => {
  const [messages, setMessages] = useState([])
  const [newContent, setNewContent] = useState('')

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    messageService.getAll().then(messages =>
      setMessages( messages )
    )
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


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
        <Messages>
        {messages.map(message => (
          <div key={message.id}>
            <Message user={message.user} content={message.content} />
          </div>
        ))}
        <div ref={messagesEndRef} />
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