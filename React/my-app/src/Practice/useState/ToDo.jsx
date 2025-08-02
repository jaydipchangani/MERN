import React, { useState } from 'react';

function ToDo() {
  const [toDo, setToDo] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Track edit mode

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setToDo([...toDo, task.trim()]);
    setTask('');
  };

  const handleDelete = (i) => {
    const updatedList = toDo.filter((_, index) => i !== index);
    setToDo(updatedList);
    if (editIndex === i) {
      // Cancel edit if the item being edited is deleted
      setEditIndex(null);
      setTask('');
    }
  };

  const handleEdit = (i) => {
    setTask(toDo[i]);
    setEditIndex(i); // Set current index as the one to update
  };

  const handleUpdate = () => {
    if (task.trim() === '' || editIndex === null) return;
    const updatedList = [...toDo];
    updatedList[editIndex] = task.trim();
    setToDo(updatedList);
    setTask('');
    setEditIndex(null); // Exit edit mode
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      {
        editIndex === null ? (
          <button onClick={handleAddTask}>Add Task</button>
        ) : (
          <button onClick={handleUpdate}>Update Task</button>
        )
      }

      <ul>
        {toDo.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
