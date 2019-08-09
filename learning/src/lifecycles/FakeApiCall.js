import React, { Component } from 'react'

import Conditional from './Conditional'

class FakeApiCall extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return (
      // checking things here and not in the child component
      this.state.isLoading ? <h2>Loading...</h2>
        : <Conditional isLoading={this.state.isLoading} />
    )
  }
}

export default FakeApiCall

// since this component is holding the isLoading state
// we will use the conditional checks here and use the child component
// to display content when it's told to.
