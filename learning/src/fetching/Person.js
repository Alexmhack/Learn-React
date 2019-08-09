import React, {Component} from 'react'

class Person extends Component {
  render() {
    const person = this.props.person

    return (
      <h1>{person !== null ? this.props.person.name : null}</h1>
    )
  }
}

export default Person
