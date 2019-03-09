import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li
                key={this.props.index}
                onClick={this.handleClick}
                dangerouslySetInnerHTML={{__html: this.props.content}}
            >
            </li>
        )
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }
}
 
export default TodoItem;