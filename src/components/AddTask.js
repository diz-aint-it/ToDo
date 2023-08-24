// src/components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../redux/actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), description: task, isDone: false };
      dispatch({ type: ADD_TASK, payload: newTask });
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
