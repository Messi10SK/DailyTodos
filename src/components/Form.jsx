import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/theme'; // Adjust path as necessary

const Form = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const theme = useSelector(selectTheme);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex justify-center mb-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} p-4 rounded-lg shadow-md`}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className={`w-full p-2 border border-gray-300 dark:text-black rounded-md focus:outline-none focus:border-blue-500 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}
      />
      <button
        type="submit"
        className={`ml-2 p-2 rounded-md ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-500 text-white hover:bg-gray-600'}`}
      >
        Add
      </button>
    </form>
  );
};

export default Form;

