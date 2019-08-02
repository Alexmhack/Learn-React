import React from 'react'

function ToDo () {
	const firstTask = 'Write content'
	const secondTask = 'Run code'

  return (
    <div>
      <input type='checkbox' name='check1' />
      <input type='checkbox' name='check2' />
      <input type='checkbox' name='check3' />
      <p>First Task: {firstTask}</p>
      <p>Second Task: {secondTask}</p>
    </div>
  )
}

export default ToDo
