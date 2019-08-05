import React from 'react'

function Joke (props) {
	return (
		<div>
			{props.question !== undefined ? <h1>{props.question}</h1> : "No Question"}
			<p>{props.punchline}</p>
		</div>
	)
}

export default Joke
