import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
//import { Icon } from 'semantic-ui-react'
import {
  Link
} from "react-router-dom"

const NavLink = styled(Link)`
  padding: 0.25em;
  color: white;
  &:hover ${NavLink} {
    color: PowderBlue;
  };
` 

const NavLinkRight = styled(Link)`
  padding: 0.25em;
  position: absolute;
  font: 14px/22px "Lato", Arial, sans-serif;
  right: 1em;
  font-size: 1em;
  color: white;
  font-weight: bold;
  &:hover ${NavLinkRight} {
    color: PowderBlue;
  };
`

const Nav = styled.div`
  width: 100%;
  background: black;
  padding: 0.75em;
`


const Navbar = ({ user, logOut }) => {


  return (
    <Nav>
      <NavLink to="/"> <i className="big white home icon"/> </NavLink>
      {user
        ? <NavLinkRight onClick={logOut} to="/#"><i className="big white sign-in icon"/></NavLinkRight>
        : <NavLinkRight to="/login"><i className="big white sign-out icon"/></NavLinkRight>
      }
    </Nav>
  )
}

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default Navbar