import React from 'react'

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        // if we use {props.handleChange}, it will receive and an event object instead
        onChange= {() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  )
}

export default TodoItem