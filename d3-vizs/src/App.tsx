import React from 'react';
import logo from './css/logo.svg';
import './css/App.css';
import Test from './viz/test/Line';
import {Bar, Dimensions} from './viz/test/Bar';
import { Interactive } from './viz/test/Interactive';

const dimensions: Dimensions = {
  width: 700,
  height: 400,
  margin: { top: 20, right: 30, bottom: 20, left: 30, },
};

function App() {
  return (
    <div className="App">
      <h1>D3 Practice</h1>
      <header className="App-header">
        <Test />
        <Bar {...dimensions} />
        <Interactive {...dimensions} />
      </header>
    </div>
  );
}

export default App;
