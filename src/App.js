import React, { Component } from 'react';
import './App.css';
import { Tablero } from './components/Tablero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Small Memotest</h1>
          <Tablero columnas={4} contenidos={["🤡","👹","👻","👽","👾","🤖","😺","🙊"]} onCompletado={() => window.alert("Ganaste!!")} />
        </header>
      </div>
    );
  }
}

export default App;
