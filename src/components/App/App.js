import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import AuthPage from '../Auth/Auth'
import LeaguesPage from '../Leagues/Leagues'
import Sidebar from '../Sidebar/Sidebar'
import CreateLeague from '../CreateLeague/CreateLeague'

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
      user: null,
      alerts: []
    }
  }

  render () {
    return (
      <Fragment>
        <Switch>
          <Redirect exact path="/" to="/auth"/>
          <Route path="/auth" component={AuthPage}/>
          <Route path="/create-league" component={CreateLeague}/>
          <Route path="/sidebar" component={Sidebar}/>
          <Route path="/leagues" component={LeaguesPage}/>
          <Route path="/joined-leagues" component={null}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App
