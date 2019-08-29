import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AuthContext from '../../context/auth-context'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class League extends Component {
  state = {
    leagues: [],
    deleted: null
  }

  static contextType = AuthContext

  async componentDidMount () {
    try {
      this.getLeagues()
    } catch (error) {
      console.error(error)
    }
  }

  getLeagues () {
    const requestBody = {
      query: `
      query {
        leagues {
          _id
          name
          game
          description
          leagueCreator {
            _id
            }
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
        for (let i = 0; i < resData.data.leagues.length; i++) {
          if (resData.data.leagues[i]._id === this.props.match.params.id) {
            this.state.leagues.push(resData.data.leagues[i])
            // return this.setState({ leagues: resData.data.leagues[i] })
          }
        }
        console.log(this.state.leagues)
        return this.state.leagues
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const userList = this.state.leagues.map(league => {
      return (
        <Card className="mb-3" key={league._id} bg="dark" text="white" style={{ width: '18rem' }}>
          <Card.Header>{league.game}</Card.Header>
          <Card.Body>
            <Card.Title>{league.name}</Card.Title>
            <Card.Text>
              {league.description}
            </Card.Text>
            <Button currentleague={league._id} variant="primary"><Link to={`/league/${league._id}`}>Edit</Link></Button>
          </Card.Body>
        </Card>
      )
    })
    return (
      <React.Fragment>
        <Sidebar/>
        <h1>My Leagues Page</h1>
        {userList}
      </React.Fragment>
    )
  }
}

export default League
