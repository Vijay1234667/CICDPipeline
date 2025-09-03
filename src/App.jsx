import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello CI/CD Practice</h1>
      <BrokenComponent /> {/* Intentional error: this component does not exist */}
    </div>
  );
}

export default App;
