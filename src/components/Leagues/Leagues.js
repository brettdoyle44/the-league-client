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
        <Col className="mx-auto" md={4} sm={6} xs={12} key={league._id}>
          <Card className="mb-3" key={league._id} bg="light" text="dark" style={{ width: '18rem' }}>
            <Card.Header className="bg-gradient" style={{ color: '#ffffff' }}><strong>{league.game}</strong></Card.Header>
            <Card.Body>
              <Card.Title>{league.name}</Card.Title>
              <Card.Text>
                {league.description}
              </Card.Text>
              <Link to={`/leagues/${league._id}`}><Button className="btn btn-purple">Learn More</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      )
    }).reverse()
    return (
      <Container>
        <Row className="mt-3">
          <Col md={2}></Col>
          <Col md={8} className="text-center" style={{ color: '#ffffff' }}><h1>Welcome to The League</h1></Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={2}></Col>
          <Col md={8} className="text-center" style={{ color: '#ffffff' }}><h4>Checkout our Leagues Below</h4></Col>
          <Col md={2}></Col>
        </Row>
        <Row className="mt-4">
          {leagueList}
        </Row>
      </Container>
    )
  }
}

export default LeaguesPage
