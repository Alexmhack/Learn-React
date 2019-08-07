import React, { Component } from 'react'

class ChangingState extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count: 0
    }
  }

  handleClick () {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render () {
    let count = this.state.count

    return (
      <div className='py-5 text-center'>
        <h1>{count}</h1>
        <br />
        <button onClick={this.handleClick}
          className='btn btn-primary'>Change</button>
      </div>
    )
  }
}

export default ChangingState
