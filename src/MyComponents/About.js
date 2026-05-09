import React from 'react';

export const About = () => {
  return (
    <section className="about-page">
      <div className="about-document">
        <span className="page-icon" aria-hidden="true">✓</span>
        <p className="breadcrumb">Todo HQ / About</p>
        <h1>Designed like a lightweight Notion workspace.</h1>
        <p>
          This todo list is a React CRUD example for capturing daily tasks in a
          clean document-style interface. It uses database-inspired rows,
          priority properties, and quick capture to make planning feel organized
          without becoming complicated.
        </p>
      </div>
    </section>
  );
};
