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
    const numValue = this.inputNumberRef.value
    let addBy = null
    if (numValue !== undefined) {
      addBy = parseInt(numValue, 10)
    }

    this.setState(prevState => {
      return {
        count: prevState.count + addBy
      }
    })
  }

  resetClick = (event) => {
    event.preventDefault()
    this.inputNumberRef.value = ''

    // never set the state value explicitly
    // always use setState
    this.setState({
      count: 0
    })
  }

  render () {
    let count = this.state.count

    return (
      <div className='py-5 text-center'>
        <h1>{count}</h1>
        <br />
        <input type="number" ref={e => this.inputNumberRef = e} />
        <br />
        <br />
        <button onClick={this.handleClick}
          className='btn btn-primary mr-2'>Change</button>
        <button onClick={this.resetClick}
          className='btn btn-secondary'>Reset</button>
      </div>
    )
  }
}

export default ChangingState
