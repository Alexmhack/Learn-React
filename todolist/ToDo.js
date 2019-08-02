import React from 'react'

function ToDo () {
	const firstTask = 'Write content'
	const secondTask = 'Run code'

	// two curly braces are used to wrap inline styles because
	// 1. First wrap is for JSX
	// 2. Second wrap is for JS

  return (
    <div>
      <input type='checkbox' name='check1' />
      <input type='checkbox' name='check2' />
      <input type='checkbox' name='check3' />
      <p style={{color: #ffffff}}>First Task: {firstTask}</p>
      <p>Second Task: {secondTask}</p>
    </div>
  )
}

export default ToDo
