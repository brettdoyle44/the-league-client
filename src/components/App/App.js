import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import CreateLeague from '../Leagues/CreateLeague'
import LeagueEdit from '../Leagues/LeagueEdit'

import Leagues from '../Leagues/Leagues'
import League from '../Leagues/League'
import Deleted from '../Leagues/Deleted'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #1c212c;
  }
`

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <GlobalStyle/>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' component={Leagues}/>
          <Route exact path='/leagues' component={Leagues}/>
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <Route
            exact path='/leagues/:id'
            render={() => (
              <League alert={this.alert} user={user} />
            )} />
          <Route
            exact path='/deleted/' component={Deleted} />
          <AuthenticatedRoute
            user={user}
            path="/createleague"
            render={() => (
              <CreateLeague user={user} alert={this.alert} />
            )} />
          <AuthenticatedRoute
            user={user}
            alert={this.alert}
            path="/leagues/:id/edit"
            render={() => (
              <LeagueEdit user={user} alert={this.alert} />
            )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
