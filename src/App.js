import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          로그인을 하면 게시판을 이용하실 수 있어욤
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login 하세용
          <Login></Login>
        </a>
      </header>
    </div>
  );
}

export default App;
