import React, { Component } from 'react'

class Add extends Component {

    state = {
        title : ''
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }

    change = (e) => this.setState({ [e.target.name] : e.target.value })

    render() {
        return (
            <form onSubmit={this.submit} className='add_con'>
                <input type='text' name='title' value={this.state.title} placeholder="Add Todo ..." onChange={this.change} autoComplete='off' />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default Add