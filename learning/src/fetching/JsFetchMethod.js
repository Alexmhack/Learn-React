import React from 'react'

function JsFetchMethod(props) {
  const endpoint = "https://swapi.co/api/people/1/"

  fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data))

  return null
}

export default JsFetchMethod
