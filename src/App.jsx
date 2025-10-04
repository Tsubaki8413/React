import React, { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>カウンターアプリ</h1>
      <CounterDisplay count={count} />
      <CounterButtons onIncrement={increment} onDecrement={decrement} />
      <ResetButton onReset={reset} />
    </div>
  );
}

export default App;