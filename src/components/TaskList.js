import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} - {task.priority}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
