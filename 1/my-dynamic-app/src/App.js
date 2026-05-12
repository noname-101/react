import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text,setText]=useState('');
  const handleChange = (event) =>{
    setText(event.target.value);
  }
  return(
    <div className='App'>
      <h2>My Dynamic App</h2>
      <input type='text' placeholder='enter text...' value={text} onChange={handleChange}/>
      <p>you typed: {text}</p>
    </div>
  );
}

export default App;
