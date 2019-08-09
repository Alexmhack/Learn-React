import React, {Component} from 'react'

class Person extends Component {
  render() {
    console.log(this.props.person)

    return (
      <h1>{this.props.person.name}</h1>
    )
  }
}

export default Person
