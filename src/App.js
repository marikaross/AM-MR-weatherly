import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import Controls from './Controls.js'
import data from './mock-data.js';
import HourlyContainer from './Hourly-Container.js';
import cleaner from './data-cleaner.js'
import Key from './Key.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      hourlyCards: [...data.hourly_forecast],
      hourlyCardLimit: 7
    }
    cleaner.fillHourlyCards = cleaner.fillHourlyCards.bind(this);
  }


  render() {
    let {location, currentCondition, summary, temp, high, low, icon} = cleaner.getCurrentData(data);
    return (
      <div className="App">
        <Controls />
        <Card city={location} condition={icon} description="A lovely sun" currentTemp={temp} high={high} low={low} summary={summary}/>
        <HourlyContainer>
        {
          cleaner.fillHourlyCards().map(hour => {
            return <HourlyCard hour={hour.hour} condition={hour.condition} projectedTemp={hour.temp} icon={hour.icon} />
          }) 
        }
        </HourlyContainer>
      </div>
    );
  }
}

export default App;
