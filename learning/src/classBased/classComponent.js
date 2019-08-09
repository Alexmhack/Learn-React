import React, { Component } from 'react'

class classComponent extends Component {
  // componentWillMount() {
  //   // will be deprecated in the future
  // }

  // componentWillReceiveProps() {
  //   // will be deprecated in the future
  // }

  static getDerivedStateFromProps(props, state) {
    // new static method which will
    // return new updated state based upon the props
  }

	render () {
		return (
			<div>
				<h2>This is the class based component.</h2>
			</div>
		)
	}
}

export default classComponent
