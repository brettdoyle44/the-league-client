import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateLeague extends Component {
  render () {
    return (
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" placeholder="League name..." />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Control as="textarea" rows="3" placeholder="League description..." />
        </Form.Group>

        <Form.Group controlId="formBasicGame">
          <Form.Control placeholder="Choose a game" as="select">
            <option>Choose a game</option>
            <option>Dota 2</option>
            <option>League of Legends</option>
            <option>CS:GO</option>
            <option>Overwatch</option>
            <option>Call of Duty</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicTeams">
          <Form.Control type="number" placeholder="Number of teams" />
        </Form.Group>
        <Form.Group controlId="formStartDate">
          <Form.Control type="date" placeholder="Start date" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
      </Form>
    )
  }
}

export default CreateLeague
