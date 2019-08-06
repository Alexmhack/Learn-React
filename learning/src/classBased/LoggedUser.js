import React, { Component } from 'react'

class LoggedUser extends Component {
	constructor () {
		super()

		this.state = {
			isLoggedIn: true // false
		}
	}

	render () {
		return (
			<div className='text-center mt-5'>
				<h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
			</div>
		)
	}
}

export default LoggedUser
