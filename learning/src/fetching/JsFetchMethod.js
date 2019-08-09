import React, {Component} from 'react'

class JsFetchMethod extends Component {
  componentDidMount() {
    const endpoint = "https://swapi.co/api/people/1/"

    // global javascript method for http requests
    fetch(endpoint)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      null
    )
  }
}

export default JsFetchMethod
