import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidenav from './features/sidenav/sidenav'
import Main from './features/main/main'

function App() {
  return (
      <div className="App">
        <div className='container'>
          <Sidenav />
          <Main />
        </div>
      </div>
  );
}

export default App;
