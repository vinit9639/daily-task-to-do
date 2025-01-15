import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { useNavigate } from 'react-router-dom';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, priority: 'Medium' }));
      setTask('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={() => navigate('/tasks')}>View Tasks</button>
    </div>
  );
};

export default TaskInput;
