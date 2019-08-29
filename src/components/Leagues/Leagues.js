import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class LeaguesPage extends Component {
  state = {
    leagues: [],
    isLoading: true
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/leagues`)
      this.setState({ leagues: response.data.leagues, isLoading: false })
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    const leagueList = this.state.leagues.map(league => {
      return (
        <Card className="mb-3" key={league._id} bg="dark" text="white" style={{ width: '18rem' }}>
          <Card.Header>{league.game}</Card.Header>
          <Card.Body>
            <Card.Title>{league.name}</Card.Title>
            <Card.Text>
              {league.description}
            </Card.Text>
            <Link to={`/leagues/${league._id}`}><Button variant="primary">Learn More</Button></Link>
          </Card.Body>
        </Card>
      )
    }).reverse()
    return (
      <React.Fragment>
        <h1>League Page</h1>
        {leagueList}
      </React.Fragment>
    )
  }
}

export default LeaguesPage
