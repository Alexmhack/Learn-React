import React from 'react'

function handleClickEvent () {
	console.log('button is clicked')
}

function EventHandling (props) {
	return (
		<div className="py-5 text-center">
			<img onMouseOver={() => console.log('mouse is over the image')}
				src="https://www.fillmurray.com/500/400"
				onLoad={e => console.log('image is loaded')}
				onError={e => console.log('error loading image')}/>
			<br />
			<br />
			<br />
			<button onClick={handleClickEvent}>Click me</button>
			<br />
			<br />
			<h3 onCopy={e => console.log('text is copied')}>
				Handle copy event on this piece of text.
			</h3>
			<br />
			<br />
			<textarea onPaste={e => console.log(e.clipboardData)} onCut={e => console.log('text is cut')}>
			</textarea>
		</div>
	)
}

export default EventHandling
