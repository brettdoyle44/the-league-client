import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import LeagueForm from './LeagueForm'
import { withRouter, Redirect } from 'react-router-dom'

class LeagueEdit extends Component {
    state = {
      league: null,
      updated: false
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
        })
        .then(res => this.setState({ updated: true }))
        .catch(console.error)
    }

    render () {
      const { league, updated } = this.state
      let leagueJsx = ''
      if (updated) {
        return <Redirect to={`/leagues/${this.props.match.params.id}`}/>
      } else if (league) {
        leagueJsx = (
          <LeagueForm
            league={this.state.league}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )
      }
      return (
        <div>
          <h1 className="text-center mt-3" style={{ color: '#ffffff' }}>Edit Your League</h1>
          {leagueJsx}
        </div>
      )
    }
}

export default withRouter(LeagueEdit)
