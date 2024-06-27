import React from 'react';
import { useState } from 'react';

export const Todowork = ({ id,number, work, completed, toggleComplete, deleteTodo ,editTodo }) => {
const[editing,setEditing] =useState(false);
const[newWork,setNewWork] = useState(work);




    const handleEdit =() =>{
        setEditing(true);
    };

 const handleSave =()=>{
    editTodo(id,newWork);
    setEditing(false);
 };

 const handleCancel =() =>{
    setNewWork(work);
    setEditing(false);
 }

 const handleChange =(e) =>{
    setNewWork(e.target.value)
 }







  return (
    <div className={`flex items-center mb-4 p-2 border rounded ${completed ? 'bg-green-100' : 'bg-gray-50'}`}>
         <span className="mr-4">{number}.</span>
         {!editing?(  <> 
         
         <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
        className="mr-2"
      />
      <span className={`flex-grow text-left ${completed ? 'line-through text-green-600' : ''}`}>
        {work}
      </span>
      <button onClick={handleEdit} className="ml-2 bg-blue-500 text-white p-1 rounded">
            Edit
          </button>
    
      </>
      
      ):(
         
          <>
          <input
            type="text"
            value={newWork}
            onChange={handleChange}
            className="flex-grow mr-2"
          />
          <button onClick={handleSave} className="mr-2 bg-green-500 text-white p-1 rounded">
            Save
          </button>
          <button onClick={handleCancel} className="bg-gray-500 text-white p-1 rounded">
            Cancel
          </button>

        </>
      )}
     
      
      <button
        onClick={deleteTodo}
        className="ml-2 bg-red-500 text-white p-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};
