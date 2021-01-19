import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Noti = styled.div`
  background: Azure
  padding: 1em
  position: relative;
  margin: 0.25em 1em;
`

const NotiText = styled.h1`
  padding: 0.25em
`

const Notification = ({ message }) => {
  if(message !== null){
    return (
      <Noti>
          <NotiText>{message}</NotiText>
      </Noti>
    )
  }
  
  return null
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification