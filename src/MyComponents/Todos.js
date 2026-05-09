import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="todos-panel">
      <div className="section-heading compact">
        <span className="section-kicker">Your lineup</span>
        <h2>Todos List</h2>
      </div>
      {props.todos.length === 0
        ? (
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">✓</div>
            <h3>No todos to display</h3>
            <p>Add your first task and start building momentum.</p>
          </div>
        )
        : (
          <div className="todo-list">
            {props.todos.map((todo, index) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                  index={index}
                />
              );
            })}
          </div>
        )}
    </div>
  );
};
