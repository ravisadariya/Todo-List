import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");

  if (!savedTodos) {
    return [];
  }

  try {
    const parsedTodos = JSON.parse(savedTodos);
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch (error) {
    console.warn("Unable to load saved todos from localStorage.", error);
    return [];
  }
};

function App() {
  const [todos, setTodos] = useState(loadTodos);
  const completedTodos = 0;
  const activeTodos = todos.length - completedTodos;

  const onDelete = (todo) => {
    setTodos((currentTodos) =>
      currentTodos.filter((item) => item.sno !== todo.sno)
    );
  };

  const addTodo = (title, desc) => {
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
      };

      return [...currentTodos, myTodo];
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="app-shell">
        <Header title="My Todos List" />
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <>
                <section className="hero-section container">
                  <div className="hero-copy">
                    <span className="eyebrow">Plan smarter, finish stronger</span>
                    <h1>Turn today&apos;s chaos into a calm, focused plan.</h1>
                    <p>
                      Capture tasks, keep your priorities visible, and build a
                      beautiful workflow that feels simple every time you open it.
                    </p>
                  </div>
                  <div className="stats-panel" aria-label="Todo summary">
                    <div className="stat-card">
                      <span>{todos.length}</span>
                      <p>Total tasks</p>
                    </div>
                    <div className="stat-card">
                      <span>{activeTodos}</span>
                      <p>In focus</p>
                    </div>
                    <div className="stat-card accent">
                      <span>{completedTodos}</span>
                      <p>Completed</p>
                    </div>
                  </div>
                </section>
                <section className="todo-dashboard container">
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </section>
              </>
            }>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
