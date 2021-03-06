import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather.js';
import Card from './Card.js'
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
    }
    
    this.fetchWeather = this.fetchWeather.bind(this);
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
      this.declareStatehood(hourlyCards, tenDay, currentData)
      this.setLocalStorage(input)
    })
    .catch(() => {
      alert("please enter a valid location");
    });
  }

  declareStatehood(hourlyCards, tenDay, currentData) {
    this.setState(
      {hourlyCards: hourlyCards,
      tenDay: tenDay,
      current: currentData}
      )
  }

  componentDidMount() {
    const location = localStorage.getItem('location')
    if (location) {
      this.fetchWeather(location)
    }
  }

  setLocalStorage(input) {
    localStorage.setItem('location', input)
  }



  render() {
      if(this.state.hourlyCards.length && this.state.tenDay.length > 0) {
        let {location, currentCondition, summary, temp, high, low, icon} = this.state.current;
          return (
            <div className="App">
              <Search fetchWeather={this.fetchWeather}/>
              <CurrentWeather city={location} condition={icon} description="A lovely sun" currentTemp={temp} high={high} low={low} summary={summary}/>
              <HourlyContainer hourlyData={this.state.hourlyCards}/>
              <TenDayContainer tenDayData={this.state.tenDay}/>
            </div>
          );
      } else {
        return <Search fetchWeather={this.fetchWeather}/>
    }
  }
}

export default App;
