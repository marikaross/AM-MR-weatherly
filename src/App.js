import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import sun from './sun.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card name="Denver" condition={sun} description="A lovely sun" currentTemp="68" highLow="70/50" summary="Today will be mostly sunny with intermitent clouds"/>
        <HourlyCard hour="8:00am" condition={sun} projectedTemp="56" />
      </div>
    );
  }
}

export default App;
