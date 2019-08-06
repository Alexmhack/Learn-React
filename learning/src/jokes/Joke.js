import React from 'react'

function Joke (props) {
	return (
		<div className={'container'}>
			<div className={'row'}>
				<div className={'col-md-12'}>
					{props.question !== undefined ? <h1>{props.question}</h1> : "No Question"}
					{props.punchline !== undefined ? <p>{props.punchline}</p> : "No Punchline"}
				</div>
			</div>
		</div>
	)
}

export default Joke
