import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Ficha } from './components/Ficha';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Ficha contenido="🦁" bocaArriba />
        </header>
      </div>
    );
  }
}

export default App;
