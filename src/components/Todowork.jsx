import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/theme'; // Adjust path as necessary

export const Todowork = ({ id, number, work, completed, toggleComplete, deleteTodo, editTodo }) => {
  const [editing, setEditing] = useState(false);
  const [newWork, setNewWork] = useState(work);
  const theme = useSelector(selectTheme);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editTodo(id, newWork);
    setEditing(false);
  };

  const handleCancel = () => {
    setNewWork(work);
    setEditing(false);
  };

  const handleChange = (e) => {
    setNewWork(e.target.value);
  };

  return (
    <div className={`flex items-center mb-4 p-2 border rounded ${completed ? 'bg-green-400' : 'bg-gray-900'} ${theme}`}>
      <span className="mr-4">{number}.</span>
      {!editing ? (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleComplete(id)}
            className="mr-2"
          />
          <span className={`flex-grow text-left ${completed ? 'line-through text-green-600' : ''}`}>
            {work}
          </span>
          <button onClick={handleEdit} className={`ml-2 p-1 rounded ${theme === 'light' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-500 text-white hover:bg-blue-300'}`}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={newWork}
            onChange={handleChange}
            className="flex-grow mr-2 dark:text-black"
          />
          <button onClick={handleSave} className={`mr-2 p-1 rounded ${theme === 'light' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-green-400 text-white hover:bg-green-300'}`}>
            Save
          </button>
          <button onClick={handleCancel} className={`p-1 rounded ${theme === 'light' ? 'bg-gray-500 text-white hover:bg-gray-600' : 'bg-gray-400 text-white hover:bg-gray-300'}`}>
            Cancel
          </button>
        </>
      )}

      <button
        onClick={deleteTodo}
        className={`ml-2 p-1 rounded ${theme === 'light' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-500 text-white hover:bg-red-300'}`}
      >
        Delete
      </button>
    </div>
  );
};
