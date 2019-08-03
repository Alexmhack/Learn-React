import React from 'react'

function Joke (props) {
  return (
    <div>
      {props.question !== undefined ? <h1>Question: {props.question}</h1> : "No question"}
      <p>Punchline: {props.punchline}</p>

      <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
      <p>Punchline: {props.punchline}</p>
    </div>
  )
}

export default Joke
