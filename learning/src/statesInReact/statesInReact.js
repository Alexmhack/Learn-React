import React, { Component } from 'react'

// states can only be used in class based component
// initialized in constructor method of class
// constructor needs to call super for running base class constructor
// you can also pass in argument named props to constructor

class statesInReact extends Component {
	constructor (props) {
		super(props)

		// state is an object with key value pairs
		this.state = {
			answer: "Yes"
		}
	}

	render () {
		return (
			<div className='text-center mt-5'>
				<h4>Is state important to know? {this.state.answer}</h4>
			</div>
		)
	}
}

export default statesInReact
