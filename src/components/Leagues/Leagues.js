import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class LeaguesPage extends Component {
  state = {
    leagues: []
  }

  componentDidMount () {
    this.getLeagues()
  }

  getLeagues () {
    const requestBody = {
      query: `
        query {
          leagues {
            name
            description
            game
          }
        }
      `
    }
    fetch('http://localhost:4741/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!')
        }
        return res.json()
      })
      .then(resData => {
        const leagues = resData.data.leagues
        this.setState({ leagues: leagues })
      })
      .catch(err => {
        console.log(err)
      })
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
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      )
    }).reverse()
    return (
      <React.Fragment>
        <Sidebar/>
        <h1>League Page</h1>
        {leagueList}
      </React.Fragment>
    )
  }
}

export default LeaguesPage
