import React from 'react'

export const TodoItem = ({ todo, onDelete, index }) => {
  return (
    <article className="todo-card">
      <div className="todo-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
      </div>
      <button
        className="delete-action"
        onClick={() => { onDelete(todo) }}
        type="button"
      >
        Delete
      </button>
    </article>
  )
}
