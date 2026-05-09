import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState('Medium');

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert('Title and description cannot be blank.');
    } else {
      addTodo(title, desc, priority);
      setTitle('');
      setDesc('');
      setPriority('Medium');
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
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="e.g. Finish design review"
          />
        </label>
        <label htmlFor="desc">
          <span>Todo Description</span>
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
        </button>
      </form>
    </section>
  );
};
