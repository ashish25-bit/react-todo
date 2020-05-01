import React, { Component } from 'react'
import Item from './Item'

class Todo extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Item key={todo.id} data={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo}/>
        ))
    }
}

export default Todo
