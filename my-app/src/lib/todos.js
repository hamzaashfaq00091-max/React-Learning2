const initialTodos = [
  "Complete project proposal",
  "Buy groceries",
  "Schedule dentist appointment",
  "Review pull requests",
  "Clean the apartment",
  "Prepare presentation slides",
  "Pay utility bills",
  "Exercise - 30 min cardio",
  "Read a book",
  "Call mom",
];

let todos = initialTodos.map((title, index) => ({
  id: index + 1,
  title,
  completed: false,
}));

export function getTodos() {
  return todos;
}

export function addTodo(title) {
  const todo = { id: Date.now(), title, completed: false };
  todos = [...todos, todo];
  return todo;
}

export function updateTodo(id, changes) {
  const todo = todos.find((item) => item.id === id);
  if (!todo) return null;
  Object.assign(todo, changes);
  return todo;
}

export function removeTodo(id) {
  const exists = todos.some((todo) => todo.id === id);
  todos = todos.filter((todo) => todo.id !== id);
  return exists;
}
