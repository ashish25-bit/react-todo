import React, { Component } from 'react'
import './App.css'
import uuid from 'react-uuid'
import Header from './components/Header' 
import Todo from './components/Todo'
import Add from './components/Add'

class App extends Component {

  state = {
    todos : []
  }

  // to load the local storage data if any...
  componentDidMount() {
    // checking whether the data local storage is present or not.
    if(localStorage.Todos) {
      this.setState({
        // setting the local storage data to the state variable
        todos : JSON.parse(localStorage.Todos)
      })
    }
  }

  // mark as complete or pending
  toggleComplete = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if (todo.id === id) 
          todo.complete = !todo.complete
        return todo
      })
    })
  }

  // delete the todo which is completed
  delTodo = (id) => {
    if(window.confirm('Do you want to delete this todo?')) {
      this.setState({
        todos : this.state.todos.filter(todo => todo.id !== id)
      },
      // callback
      () => {
        let todosObj = JSON.parse(localStorage.Todos)
        todosObj = todosObj.filter(t => t.id !== id)
        localStorage.Todos = JSON.stringify(todosObj)
      })
    }
  }

  // add a new item to the todo list
  addTodo = title => {
    if(title!=='') {
      const newTodo = {
        id : uuid(),
        title,
        complete : false
      }

      let todosObj = []
      if(!localStorage.Todos) {
        todosObj.push(newTodo)
        localStorage.Todos = JSON.stringify(todosObj)
      }
      else {
        todosObj = JSON.parse(localStorage.Todos)
        todosObj.push(newTodo)
        localStorage.Todos = JSON.stringify(todosObj)
      }
      this.setState({ todos: [...this.state.todos, newTodo] })
    }
    else alert('Enter something in the input field...')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Add addTodo = {this.addTodo} />
          <Todo todos={this.state.todos} toggleComplete = {this.toggleComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App
