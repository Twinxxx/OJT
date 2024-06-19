import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const ongoingTasks = tasks.filter(task => !task.completed);
  const doneTasks = tasks.filter(task => task.completed);

  return (
      <div>
          <h2>Ongoing Tasks</h2>
          <div className="task-list">
              {ongoingTasks.map(task => (
                  <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
              ))}
          </div>

          <h2>Done Tasks</h2>
          <div className="task-list">
              {doneTasks.map(task => (
                  <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
              ))}
          </div>
      </div>
  );
};


export default TaskList;
