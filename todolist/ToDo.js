import React from 'react'

import TodoItem from './TodoItem'

function ToDo () {
	// two curly braces are used to wrap inline styles because
	// 1. First wrap is for JSX
	// 2. Second wrap is for JS

	// background-color won't work since we cannot use hypen in regular JS.
	// we use camel case in these cases.

	const styles = {
		color: "#fff",
		backgroundColor: "#FF2D00",
		fontSize: 50, // default size is in pixels
		margin: "20px" // you can also use quotes for defining size
	}

  return (
    <div>
    	<TodoItem />
    </div>
  )
}

export default ToDo
