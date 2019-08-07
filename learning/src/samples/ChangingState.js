import React, { Component } from 'react'

class ChangingState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    let count = this.state.count
    count = 12

    return (
      <div className='py-5 text-center'>
        <h1>{count}</h1>
        <br />
        <button onClick={e => console.log(count + ' is the value of count')}
          className='btn btn-primary'>Change</button>
      </div>
    )
  }
}

export default ChangingState
