import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class Deleted extends Component {
  render () {
    return (
      <Fragment>
        <div className="container">
          <div className="row mt-4">
            <div className="col-6 mx-auto">
              <h3 style={{ color: '#ffffff' }}>Your league has been deleted. Feel free to checkout more leagues by hitting the button below.</h3>
              <Button href="#leagues/" className="btn btn-purple">Go To Leagues</Button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Deleted)
