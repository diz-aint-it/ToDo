import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { TOGGLE_TASK } from '../redux/actions';
import './ListTask.css'; 

const ListTask = () => {
  const tasks = useSelector(state => state);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all'); 
  const handleToggleTask = id => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="list-task">
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'done' ? 'active' : ''}
          onClick={() => setFilter('done')}
        >
          Done
        </button>
        <button
          className={filter === 'notDone' ? 'active' : ''}
          onClick={() => setFilter('notDone')}
        >
          Not Done
        </button>
      </div>
      <div className="tasks-container">
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} onToggle={handleToggleTask} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
