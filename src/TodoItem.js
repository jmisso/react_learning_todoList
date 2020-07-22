import React from 'react'

function TodoItem(props) {
  const completeStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        // if we use {props.handleChange}, it will receive and an event object instead
        onChange= {() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completeStyle: null}>{props.item.text}</p>
    </div>
  )
}

export default TodoItem