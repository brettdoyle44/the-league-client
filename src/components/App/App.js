import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AuthPage from '../Auth/Auth'
import LeaguesPage from '../Leagues/Leagues'
import Sidebar from '../Sidebar/Sidebar'
import CreateLeague from '../CreateLeague/CreateLeague'
import MyLeagues from '../MyLeagues/MyLeagues'
import AuthContext from '../../context/auth-context'

// import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
// import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
// import Header from '../Header/Header'
// import SignUp from '../SignUp/SignUp'
// import SignIn from '../SignIn/SignIn'
// import SignOut from '../SignOut/SignOut'
// import ChangePassword from '../ChangePassword/ChangePassword'

class App extends Component {
  constructor () {
    super()

    this.state = {
      token: null,
      userId: null,
      alerts: []
    }
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId })
  }

  logout = () => {
    this.setState({ token: null, userId: null })
  }

  render () {
    return (
      <Fragment>
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userID: this.state.userId,
            login: this.login,
            logout: this.logout }}>
          <Switch>
            {this.state.token && <Redirect exact path="/" to="/leagues"/>}
            {!this.state.token && <Route path="/auth" component={AuthPage}/>}
            {this.state.token && <Redirect exact path="/auth" to="/leagues"/>}
            {this.state.token && <Route path="/create-league" component={CreateLeague}/>}
            <Route path="/sidebar" component={Sidebar}/>
            {this.state.token && <Route path="/leagues" component={LeaguesPage}/>}
            {this.state.token && <Route path="/my-leagues" component={MyLeagues}/>}
            {!this.state.token && <Redirect to="/auth"/>}
          </Switch>
        </AuthContext.Provider>
      </Fragment>
    )
  }
}

export default App
