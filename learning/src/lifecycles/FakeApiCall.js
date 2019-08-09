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
      <Conditional isLoading={this.state.isLoading} />
    )
  }
}

export default FakeApiCall
