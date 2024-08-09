import React, { useState } from 'react';
import './app.css';

function App() {
  // State to manage the count
  const [count, setCount] = useState(0);

  // Functions to handle increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  );
}

export default App;
