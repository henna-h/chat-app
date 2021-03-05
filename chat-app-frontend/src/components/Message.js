import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment';

const MessageInfoDiv = styled.div`
  margin-bottom: 0.25em;
  width: 25em;
  padding-left: 10px;
  padding-right: 30px;
`
const MessageInfo = styled.span`
  color: Black;
  font: 14px "Lato", Arial, sans-serif;
`

const Date = styled.p`
  float: right;
`

const MessageBubble = styled.div`
  margin-bottom: 1em;
`

const Triangle = styled.div`
  width: 0; 
  height: 0;
  margin-left: 5%;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid PowderBlue;
`

const MessageText = styled.div`
  width: 25em;
  border: none;
  padding: 10px 20px;
  font: 14px/22px "Lato", Arial, sans-serif;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 5px -5px;
  resize: none;
  background: PowderBlue;
`


const Message = ({ date, content, user }) => {

  var username = "anonymous";
  if(user && user != null){
    username = user.username;
  }

  return(
      <div>
      <MessageInfoDiv>
        <MessageInfo>{username}<Date>{moment(date).format('lll')}</Date></MessageInfo>
      </MessageInfoDiv>
      <MessageBubble>
        <Triangle/>
        <MessageText>{content}</MessageText>
      </MessageBubble>
    </div>
  )
}

Message.propTypes = {
    content: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
  }

export default Message