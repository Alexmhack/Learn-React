import React from 'react'

function Joke (props) {
  return (
    <div>
      {props.question !== undefined ? <h1>Question: {props.question}</h1> : "No question"}
      <p>Punchline: {props.punchline}</p>
    </div>
  )
}

export default Joke
