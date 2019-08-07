import React, { Component } from 'react'

import TodoItem from './TodoItem'
import todoData from './todoData'

class ToDo extends Component {
	render () {
		const todoComponents = todoData.map(item => <TodoItem key={item.id} item={item} />)
		return (
			<div className="container">
				<div className="row mt-4">
					<div className="col-md-6 offset-md-3">
						<h4 className="mt-2 mb-4">Todo List</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-3">
						{todoComponents}
					</div>
				</div>
			</div>
		)
	}
}

export default ToDo
