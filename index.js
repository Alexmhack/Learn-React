import React from 'react'
import ReactDOM from 'react-dom'

function myApp () {
	return (
		<ul>
			<li>Apple</li>
			<li>Banana</li>
			<li>Mango</li>
		</ul>
	)
}

// ReactDOM takes in two arguments
// 1. What to render => HTML/Variables
// 2. Where to render => document

ReactDOM.render(
	<myApp />,
	document.getElementById('root')
)
