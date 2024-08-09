import React, { useState } from 'react';
import './app.css';

function App() {
  // State to manage the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && <p>This is a paragraph that can be shown or hidden.</p>}
    </div>
  );
}

export default App;
