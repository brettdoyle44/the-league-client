import React from 'react'
import SideNav, { NavItem, NavText, NavIcon } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
// import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )

const Sidebar = ({ user }) => (
  <SideNav
    onSelect={(selected) => {
      // Add your code here
    }}>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
      <NavItem eventKey="home">
        <NavIcon>
          <FontAwesomeIcon icon={ faHome } style={{ fontSize: '1.75em' }} />
        </NavIcon>
        <NavText>Home</NavText>
      </NavItem>
      <NavItem eventKey="create-league">
        <NavIcon>
          <FontAwesomeIcon icon={ faPlusSquare } style={{ fontSize: '1.75em' }} />
        </NavIcon>
        <NavText>Create a League</NavText>
      </NavItem>
      <NavItem eventKey="join-league">
        <NavIcon>
          <FontAwesomeIcon icon={ faUserPlus } style={{ fontSize: '1.75em' }} />
        </NavIcon>
        <NavText>Join a League</NavText>
      </NavItem>
    </SideNav.Nav>
  </SideNav>
)

export default Sidebar
