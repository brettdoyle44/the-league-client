import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <Container>
        <Row className="mt-3">
          <Col md={2}></Col>
          <Col md={8} className="text-center"><h1>Welcome to The League</h1></Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8} className="text-center"><h4>Checkout our Leauges Below</h4></Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>{leagueList}</Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    )
  }
}

export default LeaguesPage
