import React from 'react';
import './App.css';
import BrokenComponent from './BrokenComponent'; // ❌ Yeh file exist nahi karti


function App() {
  return (
    <div className="App">
      <h1>Hello CI/CD Practice</h1>
      <BrokenComponent /> 
    </div>
  );
}

export default App;
