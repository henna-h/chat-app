import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageUser = styled.div`
  margin: 0.5em;
  color: White;
  font: 14px/22px "Lato", Arial, sans-serif;
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
  width: 90%;
  border: none;
  padding: 10px 20px;
  font: 14px/22px "Lato", Arial, sans-serif;
  margin-bottom: 10px;
  border-radius: 5px;
  resize: none;
  background: PowderBlue;
`

const Message = ({ content, user }) => {
    if(user && user !== null){
        console.log(user.username)
        return(
           <div>
            <MessageUser>{user.username}</MessageUser>
            <Triangle />
            <MessageText>{content}</MessageText>
          </div>
        )
    } else {
        return(
        <div>
          <MessageUser>anonymous</MessageUser>
          <Triangle />
          <MessageText>{content}</MessageText>
        </div>
        )
    }

}

Message.propTypes = {
    content: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    //time: PropTypes.object.isRequired,
  }

export default Message