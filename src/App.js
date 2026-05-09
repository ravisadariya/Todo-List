import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const normalizeTodo = (todo, index) => ({
  sno: typeof todo.sno === 'number' ? todo.sno : index,
  title: todo.title || 'Untitled task',
  desc: todo.desc || 'No description added yet.',
  priority: todo.priority || 'Medium',
  status: todo.completed ? 'Done' : 'Inbox',
  completed: Boolean(todo.completed),
});

const loadTodos = () => {
  const savedTodos = localStorage.getItem('todos');

  if (!savedTodos) {
    return [];
  }

  try {
    const parsedTodos = JSON.parse(savedTodos);
    return Array.isArray(parsedTodos) ? parsedTodos.map(normalizeTodo) : [];
  } catch (error) {
    console.warn('Unable to load saved todos from localStorage.', error);
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(loadTodos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = todos.length - completedTodos;
  const progress = todos.length === 0 ? 0 : Math.round((completedTodos / todos.length) * 100);

  const onDelete = (todo) => {
    setTodos((currentTodos) =>
      currentTodos.filter((item) => item.sno !== todo.sno)
    );
  };

  const onToggleComplete = (todo) => {
    setTodos((currentTodos) =>
      currentTodos.map((item) => {
        if (item.sno !== todo.sno) {
          return item;
        }

        const completed = !item.completed;
        return {
          ...item,
          completed,
          status: completed ? 'Done' : 'Inbox',
        };
      })
    );
  };

  const addTodo = (title, desc, priority = 'Medium') => {
    const trimmedTitle = title.trim();
    const trimmedDesc = desc.trim();

    setTodos((currentTodos) => {
      const nextSno =
        currentTodos.length === 0
          ? 0
          : Math.max(...currentTodos.map((todo) => todo.sno)) + 1;

      const myTodo = {
        sno: nextSno,
        title: trimmedTitle,
        desc: trimmedDesc,
        priority,
        status: 'Inbox',
        completed: false,
      };

      return [myTodo, ...currentTodos];
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="notion-shell">
        <Header title="My Todos List" />
        <main className="workspace">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <aside className="workspace-sidebar" aria-label="Workspace navigation">
                    <div className="workspace-switcher">
                      <span className="workspace-avatar">T</span>
                      <div>
                        <strong>Todo HQ</strong>
                        <small>Personal workspace</small>
                      </div>
                    </div>
                    <nav className="sidebar-links" aria-label="Todo views">
                      <a href="#today" className="is-active">Today</a>
                      <a href="#database">Task database</a>
                      <a href="#priorities">Priorities</a>
                      <a href="#archive">Archive</a>
                    </nav>
                    <div className="sidebar-note">
                      <span>Progress</span>
                      <strong>{progress}%</strong>
                      <div className="progress-track" aria-hidden="true">
                        <span style={{ width: `${progress}%` }}></span>
                      </div>
                    </div>
                  </aside>

                  <section className="workspace-page" id="today">
                    <div className="page-cover" aria-hidden="true"></div>
                    <div className="page-header">
                      <span className="page-icon" aria-hidden="true">✓</span>
                      <p className="breadcrumb">Todo HQ / Today</p>
                      <h1>Today&apos;s task command center</h1>
                      <p>
                        A Notion-inspired task page with database views, quick capture,
                        priority tags, and a calm workspace for focused planning.
                      </p>
                    </div>

                    <div className="metrics-grid" aria-label="Todo summary">
                      <div className="metric-card">
                        <span>{todos.length}</span>
                        <p>Total tasks</p>
                      </div>
                      <div className="metric-card">
                        <span>{activeTodos}</span>
                        <p>In progress</p>
                      </div>
                      <div className="metric-card">
                        <span>{completedTodos}</span>
                        <p>Completed</p>
                      </div>
                    </div>

                    <section className="database-layout" id="database">
                      <AddTodo addTodo={addTodo} />
                      <Todos
                        todos={todos}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                      />
                    </section>
                  </section>
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
