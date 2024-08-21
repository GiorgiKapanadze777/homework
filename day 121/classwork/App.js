import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setTimeout(() => {
      setCount((curValue) => curValue + 1);
    }, 100);

    setTimeout(() => {
      setCount((curValue) => curValue + 1);
    }, 100);
  };
 
  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
