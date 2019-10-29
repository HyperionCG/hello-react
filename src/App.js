import React from 'react';
import logo from './logo.svg';
import './App.css';

function Text(props) {
  return (
    <span style={{color: props.color}}>{props.value}</span>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello, <Text color="red" value="Babatunde" /></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
