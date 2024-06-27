import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="w-3/4 p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default Form;

