import React from 'react'

function handleClickEvent () {
	console.log('button is clicked')
}

function EventHandling (props) {
	return (
		<div className="py-5 text-center">
			<img onMouseOver={() => console.log('mouse is over the image')}
				src="https://www.fillmurray.com/500/400" />
			<br />
			<br />
			<br />
			<button onClick={handleClickEvent}>Click me</button>
			<br />
			<br />
			<h3 onCopy={e => console.log('text is copied')}>
				Handle copy event on this piece of text.
			</h3>
		</div>
	)
}

export default EventHandling
