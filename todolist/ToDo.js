import React from 'react'

function ToDo () {
	const firstTask = 'Write content'
	const secondTask = 'Run code'

	// two curly braces are used to wrap inline styles because
	// 1. First wrap is for JSX
	// 2. Second wrap is for JS

	// background-color won't work since we cannot use hypen in regular JS.
	// we use camel case in these cases.

	const styles = {
		color: "#fff",
		backgroundColor: "#FF2D00",
		fontSize: 50 // default size is in pixels
	}

  return (
    <div>
      <input type='checkbox' name='check1' />
      <input type='checkbox' name='check2' />
      <input type='checkbox' name='check3' />
      <p style={styles}>First Task: {firstTask}</p>
      <p>Second Task: {secondTask}</p>
    </div>
  )
}

export default ToDo
