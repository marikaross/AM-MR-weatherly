import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import Controls from './Controls.js'
import HourlyContainer from './Hourly-Container.js';
import TenDayContainer from './tenDayContainer.js';
import cleaner from './data-cleaner.js'
import Key from './Key.js'
import { shallow } from 'enzyme';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
    cleaner.fillHourlyCards = cleaner.fillHourlyCards.bind(this);
    cleaner.get10Day = cleaner.get10Day.bind(this);
  }

  componentDidMount() {
  fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CA/San_Francisco.json`)
    .then(data => data.json())
    .then(data => {
      this.setState(
        {hourlyCards:[...data.hourly_forecast], 
        tenDay: [...data.forecast.simpleforecast.forecastday],
        current: data
      })
    })
    .catch("Please enter a valid city and state");
  }


  render() {
    if(this.state.hourlyCards && this.state.tenDay) {
        let {location, currentCondition, summary, temp, high, low, icon} = cleaner.getCurrentData(this.state.current);
          return (
            <div className="App">
              <Controls />
              <Card city={location} condition={icon} description="A lovely sun" currentTemp={temp} high={high} low={low} summary={summary}/>
              <HourlyContainer/>
              <TenDayContainer/>
            </div>
                );
            } else {
      return <Controls />
    }
  }
}

export default App;
