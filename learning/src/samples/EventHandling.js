import React from 'react'

function EventHandling (props) {
	return (
		<div className="pt-5 text-center">
			<img src="https://www.fillmurray.com/500/400" />
			<br />
			<br />
			<br />
			<button onClick={() => console.log('button is clicked')}>Click me</button>
		</div>
	)
}

export default EventHandling
