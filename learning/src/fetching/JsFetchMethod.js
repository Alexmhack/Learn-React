import React, {Component} from 'react'

import Person from './Person'

class JsFetchMethod extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      person: null
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    const endpoint = "https://swapi.co/api/people/1/"

    // global javascript method for http requests
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({
          person: data,
          loading: false
        })
      })
  }

  render() {
    const person = this.state.person

    return (
      <div className='text-center pt-5'>
        {this.state.loading ? <h1>Loading...</h1> : <Person person={person} />}
      </div>
    )
  }
}

export default JsFetchMethod
