import React from 'react';

export const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const priorityClass = `priority-${todo.priority.toLowerCase()}`;

  return (
    <article className={`database-row task-row ${todo.completed ? 'is-complete' : ''}`} role="row">
      <div className="task-title-cell" role="cell">
        <button
          className="task-checkbox"
          type="button"
          aria-label={todo.completed ? 'Mark task incomplete' : 'Mark task complete'}
          onClick={() => { onToggleComplete(todo); }}
        >
          {todo.completed ? '✓' : ''}
        </button>
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </div>
      </div>
      <span className={`property-pill ${todo.completed ? 'status-done' : 'status-inbox'}`} role="cell">
        {todo.status}
      </span>
      <span className={`property-pill ${priorityClass}`} role="cell">
        {todo.priority}
      </span>
      <span className="date-property" role="cell">Today</span>
      <button
        className="delete-row-button"
        onClick={() => { onDelete(todo); }}
        type="button"
      >
        Delete
      </button>
    </article>
  );
};
