import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Title and description cannot be blank.");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="add-todo-card">
      <div className="section-heading">
        <span className="section-kicker">New task</span>
        <h2>Add a Todo</h2>
        <p>Write it down once, then let the list keep it front and center.</p>
      </div>
      <form onSubmit={submit} className="todo-form">
        <div className="form-field">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            placeholder="e.g. Finish design review"
          />
        </div>
        <div className="form-field">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            rows="4"
            placeholder="Add the details, context, or next action..."
          />
        </div>
        <button type="submit" className="primary-action">
          <span>+</span> Add Todo
        </button>
      </form>
    </div>
  );
};
