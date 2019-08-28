import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AuthPage extends Component {
  state = {
    isLogin: true
  }
  constructor (props) {
    super(props)
    this.emailEl = React.createRef()
    this.passwordEl = React.createRef()
    this.passwordElTwo = React.createRef()
  }

  switchLoginHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin }
    })
  }

  submitSignUp = (event) => {
    event.preventDefault()
    const email = this.emailEl.current.value
    const password = this.passwordEl.current.value
    const confirmPassword = this.passwordElTwo.current.value

    if (email.trim().length === 0 || password.trim().length === 0 || password.trim() !== confirmPassword.trim()) {
      return
    }
    const requestBody = {
      query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"}) {
            _id
            email
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
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  submitSignIn = (event) => {
    event.preventDefault()
    const email = this.emailEl.current.value
    const password = this.passwordEl.current.value

    if (email.trim().length === 0 || password.trim().length === 0) {
    }
    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
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
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    if (this.state.isLogin) {
      return (
        <Form onSubmit={this.submitSignUp}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={this.emailEl} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={this.passwordEl}/>
          </Form.Group>
          <Form.Group controlId="formBasicPasswordTwo">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={this.passwordElTwo}/>
          </Form.Group>
          <Button className="mr-3" variant="primary" type="submit">
          Submit
          </Button>
          <Button onClick={this.switchLoginHandler} variant="primary" type="button">
            Already a member? Sign-in here.
          </Button>
        </Form>
      )
    } else {
      return (
        <Form onSubmit={this.submitSignIn}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={this.emailEl} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={this.passwordEl}/>
          </Form.Group>
          <Button className="mr-3" variant="primary" type="submit">
          Submit
          </Button>
          <Button onClick={this.switchLoginHandler} variant="primary" type="button">
          Not a member? Sign-up here.
          </Button>
        </Form>
      )
    }
  }
}

export default AuthPage
