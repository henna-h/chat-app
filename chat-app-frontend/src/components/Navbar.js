import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Link
} from "react-router-dom"

const NavLink = styled(Link)`
  padding: 0.25em;
  font-size: 1em;
  color: Azure;
  font-weight: bold;
`

const NavLinkRight = styled(Link)`
  padding: 0.25em;
  position: absolute;
  right: 1em;
  font-size: 1em;
  color: Azure;
  font-weight: bold;
`

const Nav = styled.div`
  background: black;
  padding: 0.75em
`

const Navbar = ({ user, logOut }) => {


  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Users</NavLink>
      {user
        ? <NavLinkRight onClick={logOut} to="/#">Log out</NavLinkRight>
        : <NavLinkRight to="/login">Login</NavLinkRight>
      }
    </Nav>
  )
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default Navbar