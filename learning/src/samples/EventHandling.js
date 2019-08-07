import React from 'react'

function handleClickEvent () {
	console.log('button is clicked')
}

function EventHandling (props) {
	return (
		<div className="pt-5 text-center">
			<img src="https://www.fillmurray.com/500/400" />
			<br />
			<br />
			<br />
			<button onClick={handleClickEvent}>Click me</button>
		</div>
	)
}

export default EventHandling
