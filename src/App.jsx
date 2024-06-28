import React, { useState , useEffect } from 'react';
import { Todowork } from './components/Todowork';
import Form from './components/Form';
import './index.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from './redux/theme';


export default function App() {
  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

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
    <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-black'}`}>
    <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-lg">
      <h1 className={`text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>DailyDO</h1>
      <p className={`text-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-200'} mb-6`}>Add Todos And Get Your Todos Done</p>
      <button
        onClick={toggleThemeHandler}
        className={`w-full mb-4 py-2 rounded-md ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-500 text-white hover:bg-gray-600'}`}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <Form addTodo={addTodo} />
      <div className="mt-6">
        {todos.map((todo, index) => (
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
         <footer className="text-center mt-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Satyam Kanojiya. All rights reserved.
      </footer>
      </div>
    </div>
   
  </div>
  
)};
