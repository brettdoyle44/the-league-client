import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import LeagueForm from './LeagueForm'
import { withRouter } from 'react-router-dom'

class LeagueEdit extends Component {
    state = {
      league: null
    }

    componentDidMount () {
      axios(`${apiUrl}/leagues/${this.props.match.params.id}`)
        .then(response => this.setState({
          league: response.data.league
        }))
        .catch(() => this.props.alert({
          heading: 'Error',
          message: 'Something went wrong',
          variant: 'danger'
        }))
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
        method: 'PATCH',
        url: `${apiUrl}/leagues/${this.state.league._id}`,
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
            message: 'You updated your league!',
            variant: 'success'
          })
          this.props.history.push(`/leagues/${response.data.league.id}`)
        })
        .catch(console.error)
    }

    render () {
      if (!this.state.league) {
        return (
          <h1>Loading..</h1>
        )
      }
      return (
        <LeagueForm
          league={this.state.league}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
}

export default withRouter(LeagueEdit)
