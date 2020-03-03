import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidUpdate() {
    console.log('child update')
  }
  render() {
    console.log('child render')
    const { content, test } = this.props
    return (
      <li
        key={this.props.index}
        onClick={this.handleClick}
      >
        {test} - {content}
      </li>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem
