import React from 'react'

function TimeOfDay () {
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay

	if (hours < 12) {
		timeOfDay = 'Morning'
	} else if (hours > 12 && hours <= 17) {
		timeOfDay = 'Afternoon'
	} else if (hours > 17 && hours <= 21) {
		timeOfDay = 'evening'
	} else if (hours == 24) {
		timeOfDay = 'Midnight'
	} else if (hours > 21 && hours < 24) {
		timeOfDay = 'Night'
	}

	return (
		<div>
			<p>Good {timeOfDay}!</p>
		</div>
	)
}

export default TimeOfDay
