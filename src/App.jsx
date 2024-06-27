import React, { useState , useEffect } from 'react';
import { Todowork } from './components/Todowork';
import Form from './components/Form';
import './index.css'; // Ensure Tailwind CSS is imported

export default function App() {
  const [todos, setTodos] = useState([]);
 
 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), work: todo, completed: false }]);
    localStorage.setItem(todos)
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.removeItem((todo)=>{todo.id})
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };



  const editTodo = (id, newWork) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, work: newWork } : todo
      )
    );
  };
  
  

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 font-robot">DailyDO</h1>
      <p className='font-robot'>Add Todos And Get Your Todos Done</p>
      <Form addTodo={addTodo} />
      <div className="font-mont">
        {todos.map((todo,index) => (
          <Todowork
            key={todo.id}
            id={todo.id}
            number={index + 1}
            work={todo.work}
            completed={todo.completed}
            toggleComplete={toggleComplete}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}
