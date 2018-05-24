import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import sun from './sun.png'
import data from './mock-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hourlyCardLimit: 7
    }
  }

  getCurrentData(data) {
    const weatherStatus = {
    location: data.current_observation.display_location.full,
    currentCondition: data.forecast.simpleforecast.forecastday[0].conditions,
    day: data.forecast.simpleforecast.forecastday[0].date.weekday,
    temp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext,
    icon: data.forecast.simpleforecast.forecastday[0].icon_url
  }

    return weatherStatus;
  }

  render() {
    let {location, currentCondition, summary, temp, high, low, icon} = this.getCurrentData(data);
    return (
      <div className="App">
        <Card name={location} condition={icon} description="A lovely sun" currentTemp={temp} highLow={high, low} summary={summary}/>
        <HourlyCard hour="8:00am" condition={sun} projectedTemp="56" />
      </div>
    );
  }
}

export default App;
