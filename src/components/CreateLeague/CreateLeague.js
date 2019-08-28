import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sidebar from '../Sidebar/Sidebar'
import AuthContext from '../../context/auth-context'

class CreateLeague extends Component {
  static contextType = AuthContext

  constructor (props) {
    super(props)
    this.nameElRef = React.createRef()
    this.descriptionElRef = React.createRef()
    this.gameElRef = React.createRef()
    this.teamsElRef = React.createRef()
    this.dateElRef = React.createRef()
  }

  submitCreateLeague = (event) => {
    event.preventDefault()
    const name = this.nameElRef.current.value
    const description = this.descriptionElRef.current.value
    const game = this.gameElRef.current.value
    const maxTeams = this.teamsElRef.current.value
    const startDate = this.dateElRef.current.value

    if (name.trim().length === 0 || description.trim().length === 0) {
      return
    }

    const league = { name, description, game, maxTeams, startDate }

    console.log(league)

    const requestBody = {
      query: `
        mutation {
          createLeague(leagueInput: {name: "${name}", description: "${description}", game: "${game}", maxTeams: ${maxTeams}, dateStart: "${startDate}"}) {
            _id
            name
            game
          }
        }
      `
    }

    fetch('http://localhost:4741/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!')
        }
        return res.json()
      })
      .then(this.props.history.push('/leagues'))
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    return (
      <React.Fragment>
        <Sidebar/>
        <Form onSubmit={this.submitCreateLeague}>
          <Form.Group controlId="formBasicName">
            <Form.Control type="text" placeholder="League name..." ref={this.nameElRef} />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Control as="textarea" rows="3" placeholder="League description..." ref={this.descriptionElRef} />
          </Form.Group>

          <Form.Group controlId="formBasicGame">
            <Form.Control placeholder="Choose a game" as="select" ref={this.gameElRef}>
              <option>Choose a game</option>
              <option>Dota 2</option>
              <option>League of Legends</option>
              <option>CS:GO</option>
              <option>Overwatch</option>
              <option>Call of Duty</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicTeams">
            <Form.Control type="number" placeholder="Number of teams" ref={this.teamsElRef}/>
          </Form.Group>
          <Form.Group controlId="formStartDate">
            <Form.Control type="date" placeholder="Start date" ref={this.dateElRef}/>
          </Form.Group>
          <Button variant="primary" type="submit">
          Submit
          </Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default CreateLeague
