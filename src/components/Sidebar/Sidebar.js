import React from 'react'
import SideNav, { NavItem, NavText, NavIcon } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
// import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlusSquare, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../../context/auth-context'
import { Link } from 'react-router-dom'

const Sidebar = props => (

  <AuthContext.Consumer>
    {context => {
      return (
        <SideNav
          onSelect={(selected) => {
          }}>
          <SideNav.Toggle/>
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <Link to="/leagues"><FontAwesomeIcon icon={ faHome } style={{ fontSize: '1.75em' }} /></Link>
              </NavIcon>
              <NavText><Link to="/leagues">Home</Link></NavText>
            </NavItem>
            <NavItem eventKey="create-league">
              <NavIcon>
                <Link to="/create-league"><FontAwesomeIcon icon={ faPlusSquare } style={{ fontSize: '1.75em' }} /></Link>
              </NavIcon>
              <NavText><Link to="/create-league">Create a League</Link></NavText>
            </NavItem>
            <NavItem eventKey="join-league">
              <NavIcon>
                <Link to="/my-leagues"><FontAwesomeIcon icon={ faUser } style={{ fontSize: '1.75em' }} /></Link>
              </NavIcon>
              <NavText><Link to="/my-leagues">My Created Leagues</Link></NavText>
            </NavItem>

            <NavItem onClick={context.logout} eventKey="logout">
              <NavIcon>
                <FontAwesomeIcon icon={ faSignOutAlt } style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>Logout</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      )
    }}
  </AuthContext.Consumer>
)

export default Sidebar
