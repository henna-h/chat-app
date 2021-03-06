import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import messageService from '../services/messages'
import Message from './Message'

const MessageBox = styled.div`
  background: White;
  width: 30em;
  height: 39em;
  position: relative;
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5em;
  padding: 1em 2em;
  align-items: center;
  display: block;
  border: 1.5px solid Grey;
  border-radius: 5px;
`

const Messages = styled.div`
  overflow-y: scroll;
  width: 27em;
  height: 32em;
  padding-bottom: 2em;
  padding-right: 1.5em;
`

const MessageSpan = styled.span`
  width: 25em;
  position: absolute;
  bottom: 0.5em;
  display:inline-flex;
  padding-top: 1em;
`

const Textarea = styled.textarea`
  width: 21em;
  min-height: 4.5em;
  border: none;
  padding: 10px 20px;
  font: 14px/22px "Lato", Arial, sans-serif;
  margin-bottom: 10px;
  border-radius: 5px;
  resize: none;
  box-shadow: inset 0 0 1.7px;
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

    if(newContent && newContent != null && newContent.replace(/\s/g, '').length > 0){
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
    }

    setNewContent('')
  }
  
  return (
    <div>
      <MessageBox>
        <Messages>
        {messages.map(message => (
          <div key={message.id}>
            <Message date={message.date} user={message.user} content={message.content} />
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