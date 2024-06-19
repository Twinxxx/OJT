import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get('http://localhost:8000/api/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    };

    const addTask = (newTask) => {
        axios.post('http://localhost:8000/api/tasks', newTask)
            .then(response => {
                setTasks([...tasks, response.data]);
            })
            .catch(error => console.error('Error adding task:', error));
    };

    const updateTask = (updatedTask) => {
        axios.put(`http://localhost:8000/api/tasks/${updatedTask.id}`, updatedTask)
            .then(response => {
                setTasks(tasks.map(task => (task.id === updatedTask.id ? response.data : task)));
            })
            .catch(error => console.error('Error updating task:', error));
    };

    const deleteTask = (taskId) => {
        axios.delete(`http://localhost:8000/api/tasks/${taskId}`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Todo List</h1>
                <TaskForm onSubmit={addTask} />
                <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
            </div>
        </div>
    );
}

export default App;
