import React, { Component } from 'react';
import WeaterLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeaterLocation ></WeaterLocation>
      </div>
    );
  }
}

export default App;
