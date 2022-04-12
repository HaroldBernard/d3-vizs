import React from 'react';
import logo from './css/logo.svg';
import './css/App.css';
import Test from './viz/test/Line';
import {Bar, Dimensions} from './viz/test/Bar';

const dimensions: Dimensions = {
  width: 600,
  height: 400,
  margin: { top: 20, right: 30, bottom: 30, left: 40, },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Bar {...dimensions} />
        <Test />
      </header>
    </div>
  );
}

export default App;
