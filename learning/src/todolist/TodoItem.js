import React from 'react'

function TodoItem (props) {
	const completed = props.item.completed

	// calling props.handleChange(id) method somewhere here will cause the infinite loop
	// error since we are using setState in there.

	// function handleCheckInput (event) {
	// 	console.log(event)
	// }

	return (
		<div className="card mb-4">
			<div className="card-body">
				<h5 className="card-title">
					{completed ? <s><p>{props.item.text}</p></s> : <p>{props.item.text}</p>}
				</h5>

				<div className="input-group mb-3">
				  <div className="input-group-prepend">
				    <div className="input-group-text">
			      	<input type='checkbox'
			      		aria-label="Checkbox for following text input"
			      		name='check1'
			      		onChange={() => props.handleChange(props.item.id)}
			      		checked={completed} />
				    </div>
				  </div>
				</div>
			</div>
		</div>
	)
}

export default TodoItem
