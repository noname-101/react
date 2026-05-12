import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [step,setStep] = useState(1);
  const minVal = 0;
  const handleIncrement = () =>{
    setCounter(counter+step);
  };
  const handleDecrement = () =>{
    if(counter-step>minVal){
      setCounter(counter-step);
    }
  };
  const handleReset = () =>{
    setCounter(0);
  };
  const changeStep = (event) =>{
    setStep(Number(event.target.value));
  };
  return(
    <div className='App'>
      <h1>Counter Application</h1>
      <div style={{fontSize:"48px"}}><span>{counter}</span></div>
      <div style={{}}>  
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p>step value: <input type='number' value={step} onChange={changeStep}/> </p>
    </div>
  );
}

export default App;
