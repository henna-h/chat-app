import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Noti = styled.div`
  border: 1px solid DarkCyan;
  background-color: PowderBlue;
  color: Black;
  font: 14px/22px "Lato", Arial, sans-serif;
  transition:0.5s;
  cursor:pointer;
  padding: 0.25em
`

const Notification = ({ message }) => {
  if(message !== null){
    return (
      <Noti>{message}</Noti>
    )
  }
  
  return null
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification