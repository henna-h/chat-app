import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageUser = styled.div`
  margin: 1em;
  color: PowderBlue;
  border-style: none none solid none;
`

const MessageText = styled.div`
  margin: 1em;
  color: white;
`

const Message = ({ content, user }) => {
    if(user && user !== null){
        console.log(user.username)
        return(
           <div>
            <MessageUser>{user.username}:</MessageUser>
            <MessageText>{content}</MessageText>
          </div>
        )
    } else {
        return(
        <div>
          <MessageUser>anonymous:</MessageUser>
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