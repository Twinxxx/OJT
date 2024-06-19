import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
    const handleDelete = () => {
        onDelete(task.id);
    };

    const handleUpdate = () => {
        onUpdate({ ...task, completed: true });
    };

    return (
        <div className="task-item">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Due Date: {task.due_date}</p>
            {!task.completed && <button onClick={handleUpdate}>Mark as Done</button>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
