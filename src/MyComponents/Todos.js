import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <section className="task-database">
      <div className="database-toolbar">
        <div className="block-heading compact">
          <span className="block-eyebrow">Task list</span>
          <h2>Todos List</h2>
        </div>
        <p className="view-note">Simple table view</p>
      </div>

      {props.todos.length === 0
        ? (
          <div className="empty-database">
            <span className="empty-page-icon" aria-hidden="true">☐</span>
            <h3>No todos to display</h3>
            <p>Add your first task to populate this Notion-style database.</p>
          </div>
        )
        : (
          <div className="database-table" role="table" aria-label="Todo database">
            <div className="database-row database-head" role="row">
              <span role="columnheader">Task</span>
              <span role="columnheader">Status</span>
              <span role="columnheader">Priority</span>
              <span role="columnheader">Due</span>
              <span role="columnheader">Actions</span>
            </div>
            {props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                  onToggleComplete={props.onToggleComplete}
                />
              );
            })}
          </div>
        )}
    </section>
  );
};
