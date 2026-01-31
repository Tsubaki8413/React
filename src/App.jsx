import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const AddTodo = () => {
    if (task.trim() !== '') {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const DeleteTodo = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const CheckBox = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>ToDoアプリ</h1>

      <div className="input-area">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="タスクを入力"
        />
        <button onClick={AddTodo}>追加</button>
      </div>
      
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => CheckBox(index)}
            />
            {t.text}
            <button onClick={() => DeleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;