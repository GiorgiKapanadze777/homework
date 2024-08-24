import React from 'react';
import News from './src/components/News';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Today's News</h1>
      </header>
      <News />
    </div>
  );
};

export default App;
