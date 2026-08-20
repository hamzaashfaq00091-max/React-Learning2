"use client";

import { useEffect, useState } from "react";
import { getTodos } from "@/lib/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/todos").then((response) => response.json()).then(setTodos)
      .catch(() => setError("Could not load your todos.")).finally(() => setLoading(false));
  }, []);

  async function addTodo(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    const response = await fetch("/api/todos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: cleanTitle }) });
    if (!response.ok) return setError("Could not add that todo.");
    const newTodo = await response.json();
    setTodos((current) => [...current, newTodo]);
    setTitle("");
    console.log(todos)
  }

  async function toggleTodo(todo) {
    const response = await fetch(`/api/todos/${todo.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ completed: !todo.completed }) });
    if (!response.ok) return setError("Could not update that todo.");
    const updated = await response.json();
    setTodos((current) => current.map((item) => item.id === todo.id ? updated : item));
  }

  async function deleteTodo(id) {
    const response = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    if (!response.ok) return setError("Could not delete that todo.");
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  const visibleTodos = todos.filter((todo) => filter === "all" || (filter === "active" ? !todo.completed : todo.completed));
  const remaining = todos.filter((todo) => !todo.completed).length;

  return <main className="todo-shell"><section className="todo-panel">
    <header className="todo-header"><p className="eyebrow">Daily focus</p><h1>Todo, gently handled.</h1><p className="subtitle">{remaining} things left to do</p></header>
    <form className="add-form" onSubmit={addTodo}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="What needs your attention?" aria-label="New todo" />
      <button type="submit">Add todo</button>
    </form>
    <nav className="filters" aria-label="Todo filters">{["all", "active", "completed"].map((option) => <button key={option} className={filter === option ? "selected" : ""} onClick={() => setFilter(option)} type="button">{option}</button>)}</nav>
    {error && <p className="error" role="alert">{error}</p>}
    <div className="todo-list">{loading ? <p className="empty-state">Loading your list...</p> : visibleTodos.length === 0 ? <p className="empty-state">Nothing here yet.</p> : visibleTodos.map((todo) => <article className={`todo-item ${todo.completed ? "done" : ""}`} key={todo.id}><button className="check-button" onClick={() => toggleTodo(todo)} aria-label="Toggle todo" type="button">{todo.completed ? "✓" : ""}</button><span>{todo.title}</span><button className="delete-button" onClick={() => deleteTodo(todo.id)} aria-label="Delete todo" type="button">×</button></article>)}</div>
  </section></main>;
}