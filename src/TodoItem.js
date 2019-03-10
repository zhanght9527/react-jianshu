import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content } = this.props
    return (
      <li
        key={this.props.index}
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </li>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

export default TodoItem;