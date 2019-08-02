import React from 'react'
import ReactDOM from 'react-dom'

import MyInfo from './components/MyInfo'

// ReactDOM takes in two arguments
// 1. What to render => HTML/Variables
// 2. Where to render => document

ReactDOM.render(
	<MyInfo />,
	document.getElementById('root')
)
