import React from 'react';

const Task = ({ task, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.description}</span>
    </div>
  );
};

export default Task;
