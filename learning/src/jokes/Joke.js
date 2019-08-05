import React from 'react'

function Joke (props) {
	return (
		<div>
			{props.question !== undefined ? <h1>{props.question}</h1> : "No Question"}
			{props.punchline !== undefined ? <p>{props.punchline}</p> : "No Punchline"}
		</div>
	)
}

export default Joke
