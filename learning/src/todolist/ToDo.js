import React, { Component } from 'react'

import TodoItem from './TodoItem'
import todoData from './todoData'

class ToDo extends Component {
	constructor (props) {
		super(props)
		this.state = {
			todos: todoData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange (id) {
		this.setState(prevState => {
			let updatedTodos = prevState.todos

			updatedTodos.map(item => {
				if (item.id === id) {
					item.completed = !item.completed
				}
			})

			return {
				todos: updatedTodos
			}
		})
    // this.setState(prevState => {
    //   const updatedTodos = prevState.todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed
    //     }
    //     return todo
    //   })
    //   return {
    //     todos: updatedTodos
    //   }
    // })
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
