import React from 'react'

function TodoItem (props) {
	const completed = props.completed

	return (
		<div className="card mb-4">
			<div className="card-body">
				<h5 className="card-title">
					{completed ? <s><p>{props.text}</p></s> : <p>{props.text}</p>}
				</h5>

				<div className="input-group mb-3">
				  <div className="input-group-prepend">
				    <div className="input-group-text">
			      	<input type='checkbox'
			      		aria-label="Checkbox for following text input"
			      		name='check1'
			      		checked={completed} />
				    </div>
				  </div>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
