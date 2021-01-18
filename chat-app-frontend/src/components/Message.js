import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageText = styled.div`
  margin: 1em;
  color: Azure
`

const Message = ({ content, user }) => {
    if(user && user !== null){
        console.log(user.username)
        return(
          <MessageText>{user.username}: {content}</MessageText>
        )
    } else {
        return(
          <MessageText>anonymous: {content}</MessageText>
        )
    }

}

Message.propTypes = {
    content: PropTypes.String.isRequired,
    user: PropTypes.object.isRequired,
  }

export default Message