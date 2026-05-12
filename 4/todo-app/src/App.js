import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [task,setTask] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTask = () =>{
    if(newTask.trim()){
      setTask([...task,{id:Date.now(), text:newTask, completed:false}])
    }
    setNewTask('');
  };
  const deleteTask = (taskId) =>{
    setTask(task.filter(task=>taskId!==task.id));
  };
  const toggleTaskCompletion = (taskId) =>{
    setTask(task.map(task => task.id === taskId ? {...task, completed:!task.completed}:task));
  };
  return(
    <div className='todo-container'>
      <h1 className='todo-header' style={{color:'#4a90e2'}}>To-do List</h1>
      <div className='todo-input-wrapper'>
        <input type='text' className='todo-input' value={newTask} placeholder='Enter new task' onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button onClick={addTask} className='add-task-button'>Add Task</button>
      </div>
      <ul className='todo-list'>
        {task.map((task)=>(
          <li key={task.id} className={`todo-item ${task.completed?'done':''}`}>
            <span onClick={toggleTaskCompletion} className='taskText'>
              {task.text}
            </span>
            <button onClick={()=>deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
