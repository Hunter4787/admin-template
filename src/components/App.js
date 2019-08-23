import React from 'react';
import './App.css';
import Admin from './admin';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    </div>
  );
}

export default App;
