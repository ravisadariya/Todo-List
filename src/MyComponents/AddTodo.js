import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Medium");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Title and description cannot be blank.");
    } else {
      addTodo(title, desc, priority);
      setTitle("");
      setDesc("");
      setPriority("Medium");
    }
  };

  return (
    <section className="quick-capture-card">
      <div className="block-heading">
        <span className="block-eyebrow">Quick capture</span>
        <h2>Add a Todo</h2>
        <p>Create a Notion-style task page with a priority property.</p>
      </div>
      <form onSubmit={submit} className="capture-form">
        <label htmlFor="title">
          <span>Todo Title</span>
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
            id="title"
            placeholder="Type a task name..."
          />
        </label>
        <label htmlFor="desc">
          <span>Todo Description</span>
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
            id="desc"
            rows="4"
            placeholder="Add context, acceptance criteria, or next steps..."
          />
        </label>
        <label htmlFor="priority">
          <span>Priority</span>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            id="priority"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>
        <button type="submit" className="new-page-button">
          + Add Todo
            placeholder="Add the details, context, or next action..."
          />
        </div>
        <button type="submit" className="primary-action">
          <span>+</span> Add Todo
        </button>
      </form>
    </section>
  );
};
