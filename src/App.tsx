import React from 'react';
import logo from './logo.svg';
import './App.css';

function Logo() {
  return (
      <img src={logo} className="App-logo" alt="logo" />
  );
}

class HelloWorld extends React.Component {
  render() {
    return (<div>
    <p id = "first">Hello&nbsp;</p> <p id = "second"> World</p>
    </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;