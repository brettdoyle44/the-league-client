import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link style={{ color: '#ffffff' }} href="#change-password">Change Password</Nav.Link>
    <Nav.Link style={{ color: '#ffffff' }} href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link style={{ color: '#ffffff' }} href="#createleague">Create a League</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link style={{ color: '#ffffff' }} href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link style={{ color: '#ffffff' }} href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link style={{ color: '#ffffff' }} href="#leagues">Leagues</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="bg-off-black" expand="md">
    <Navbar.Brand style={{ color: '#ffffff' }} href="#">
      The League
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span style={{ color: '#ffffff' }} className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
