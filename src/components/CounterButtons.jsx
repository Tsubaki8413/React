import React from 'react';

function CounterButtons({ onIncrement, onDecrement }) {
  return (
    <div className="buttons">
      <button onClick={onDecrement}>-1</button>
      <button onClick={onIncrement}>+1</button>
    </div>
  );
}

export default CounterButtons;