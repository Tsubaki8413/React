import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", (count));
  }, [count]);

  const decrement = () => setCount(prev => prev - 1);
  const increment = () => setCount(prev => prev + 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>カウンターアプリ</h1>

      <div className="display">
        <label>現在のカウント：</label>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <div className="button">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
      
      <button onClick={reset}>リセット</button>
    </div>
  );
}

export default App;