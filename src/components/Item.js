import React, { Component } from 'react'

class Item extends Component {

    getStyle = () => {
        return {
          textDecoration: this.props.data.complete ? "line-through" : "none",
          opacity : this.props.data.complete ? '0.5' : '1'
        }
    }

    render() {
        const { id, title, complete } = this.props.data 
        return (
            <div className='todo_item' style={this.getStyle()}>
                <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} checked={complete} /> {title}
                <button className='del_btn' onClick={this.props.delTodo.bind(this, id)}>Delete</button>
            </div>
        )
    }
}

export default Item