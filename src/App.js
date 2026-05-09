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
        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
