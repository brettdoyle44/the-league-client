import React, { Component } from 'react'
import LeagueForm from './LeagueForm'
// import AuthContext from '../../context/auth-context'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class CreateLeague extends Component {
  state = {
    league: {
      name: '',
      description: '',
      game: '',
      maxTeams: ''
    }
  }

  handleChange = event => {
    this.setState({
      league: {
        ...this.state.league,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: `${apiUrl}/leagues`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        league: this.state.league
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!',
          message: 'You created a league!',
          variant: 'success'
        })
        this.props.history.push(`/leagues/${response.data.league._id}`)
      })
      .catch(console.error)
  }
  render () {
    return (
      <LeagueForm
        league={this.state.league}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreateLeague)
