import React, {Component} from 'react'

class LoginButton extends Component {
  constructor() {
    super()
    this.handleLoginButton = this.handleLoginButton.bind(this)

    this.state = {
      loggedIn: false
    }
  }

  handleLoginButton(event) {
    event.preventDefault()

    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      }
    })
  }

  render() {
    return (
      <div className='text-center pt-5'>
        <h1>You are {this.state.loggedIn ? "Logged In" : "Logged Out"}</h1>
        <br />
        <button className='btn btn-secondary' onClick={this.handleLoginButton}>
          {this.state.loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    )
  }
}

export default LoginButton
