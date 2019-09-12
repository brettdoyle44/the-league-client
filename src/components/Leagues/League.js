import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'

class League extends Component {
  state = {
    league: null
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/leagues/${this.props.match.params.id}`)
      this.setState({
        league: response.data.league
      })
    } catch (error) {
      console.error(error)
    }
  }

  sendDelete = event => {
    event.preventDefault()
    axios({
      method: 'DELETE',
      url: `${apiUrl}/leagues/${this.state.league._id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.props.alert({
        heading: 'Delete Success',
        message: messages.deleteSuccess,
        variant: 'success'
      }))
      .then(this.props.history.push('/deleted'))
      .catch(console.error)
  }

  // sendDelete = async () => {
  //   try {
  //     await axios.delete(`${apiUrl}/leagues/${this.props.match.params.id}`)
  //     this.setState({ deleted: true })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render () {
    const { league } = this.state
    return (
      <div>
        { league && (
          <Fragment>
            <Card style={{ border: 'solid 1px #69428c' }} className="text-center mt-4">
              <Card.Header className="bg-gradient" style={{ color: '#ffffff' }}>{league.game}</Card.Header>
              <Card.Body>
                <Card.Title>{league.name}</Card.Title>
                <Card.Text>
                  {league.description}
                </Card.Text>
                {(this.props.user && league) && this.props.user._id === league.owner
                  ? <Fragment><Button className="btn btn-purple" href={`#leagues/${league._id}/edit`}>Update League</Button> <Button className="ml-3 btn btn-purple" onClick={this.sendDelete}>Delete League</Button></Fragment> : ''}
              </Card.Body>
              <Card.Footer className="bg-gradient" style={{ color: '#ffffff' }}>{league.maxTeams} Teams</Card.Footer>
            </Card>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(League)
