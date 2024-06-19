import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task }) => {
    const [title, setTitle] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [dueDate, setDueDate] = useState(task ? task.due_date.split(' ')[0] : '');
    const [dueTime, setDueTime] = useState(task ? task.due_date.split(' ')[1] : '');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setDueDate(task.due_date.split(' ')[0]);
            setDueTime(task.due_date.split(' ')[1]);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, due_date: `${dueDate} ${dueTime}` });
        setTitle('');
        setDescription('');
        setDueDate('');
        setDueTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <input
                type="time"
                value={dueTime}
                onChange={(e) => setDueTime(e.target.value)}
                required
            />
            <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;
