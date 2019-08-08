import React, { Component } from 'react'

import TodoItem from './TodoItem'
import todoData from './todoData'

class ToDo extends Component {
	constructor (props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)

		this.state = {
			todos: todoData
		}
	}

	handleChange (id) {
		console.log('CHECKED', id)
	}

	render () {
		const todoComponents = this.state.todos.map(item => <TodoItem key={item.id}
			item={item} handleChange={this.handleChange} />)

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
