import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import Search from './Search.js'
import HourlyContainer from './Hourly-Container.js';
import TenDayContainer from './tenDayContainer.js';
import cleaner from './data-cleaner.js'
import Key from './Key.js'
import { shallow } from 'enzyme';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hourlyCards: [],
      tenDay: [],
      current: {},
      error: false
    }
    cleaner.fillHourlyCards = cleaner.fillHourlyCards.bind(this);
    cleaner.get10Day = cleaner.get10Day.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.formatEntry = this.formatEntry.bind(this);
  }

  formatEntry(input) {
    const userInput = input.split(', ');
    const entryObj = 
    {
      city: userInput[0],
      state: userInput[1]
    }
    return entryObj;
  }

  fetchWeather(input) {
    const cleanedInput = this.formatEntry(input);

  fetch(`http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/${cleanedInput.state}/${cleanedInput.city}.json`)
    .then(data => data.json())
    .then(data => {
      const hourlyCards = cleaner.fillHourlyCards([...data.hourly_forecast]);
      const tenDay = cleaner.get10Day([...data.forecast.simpleforecast.forecastday])
      const currentData = cleaner.getCurrentData(data);
      this.setState(
        {hourlyCards: hourlyCards, 
        tenDay: tenDay,
        current: currentData},
        localStorage.setItem('location', input))
    })
    .catch(() => {
      alert("please enter a valid location");
    });
  }


    componentDidMount() {
    const location = localStorage.getItem('location')
    if ('location') {
      this.fetchWeather(location)
    }
  }


  render() {
      if(this.state.hourlyCards.length > 0 && this.state.tenDay.length > 0) {
        let {location, currentCondition, summary, temp, high, low, icon} = this.state.current;
          return (
            <div className="App">
              <Search fetchWeather={this.fetchWeather}/>
              <Card city={location} condition={icon} description="A lovely sun" currentTemp={temp} high={high} low={low} summary={summary}/>
              <HourlyContainer hourlyData={this.state.hourlyCards}/>
              <TenDayContainer tenDayData={this.state.tenDay}/>
            </div>
          );
      } else {
        {return <Search fetchWeather={this.fetchWeather}/>}
    }
  }
}

export default App;
