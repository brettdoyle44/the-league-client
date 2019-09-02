import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Deleted extends Component {
  render () {
    return (
      <Fragment>
        <h3>Your league has been deleted. Feel free to checkout more leagues by hitting the button below.</h3>
        <Button href="#leagues/" className="btn btn-dark">Go To Leagues</Button>
      </Fragment>
    )
  }
}

export default withRouter(Deleted)
