import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LeagueForm = ({ league, handleChange, handleSubmit }) => (
  <React.Fragment>
    <Form className="mt-3" onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Control name="name" type="text" placeholder="League name..." value={league.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Control as="textarea" rows="3" placeholder="League description..." name="description" value={league.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="game">
        <Form.Control name="game" placeholder="Choose a game" as="select" value={league.game} onChange={handleChange}>
          <option>Choose a game</option>
          <option>Dota 2</option>
          <option>League of Legends</option>
          <option>CS:GO</option>
          <option>Overwatch</option>
          <option>Call of Duty</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="teams">
        <Form.Control name="maxTeams" type="number" placeholder="Number of teams" value={league.maxTeams} onChange={handleChange}/>
      </Form.Group>
      <Button className="btn btn-purple" type="submit">
      Submit
      </Button>
    </Form>
  </React.Fragment>
)

export default LeagueForm
