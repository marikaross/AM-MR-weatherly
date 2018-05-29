import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import Controls from './Controls.js'
import data from './mock-data.js';
import HourlyContainer from './Hourly-Container.js';
import cleaner from './data-cleaner.js'
import Key from './Key.js'
console.log(Key);
class App extends Component {
  constructor() {
    super();
    this.state = {
      hourlyCards: [...data.hourly_forecast],
      tenDay: [...data.forecast.simpleforecast.forecastday]
    }
    cleaner.fillHourlyCards = cleaner.fillHourlyCards.bind(this);
    cleaner.get10Day = cleaner.get10Day.bind(this);
  }

  // componentDidMount() {
  // fetch(http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CA/San_Francisco.json).
  //   then(data => data.json()).
  //   then(data => console.log(data)).
  //   then(data => {
  //     this.setState(
  //       {hourlyCards:[...data.hourly_forecast], 
  //       tenDay: [...data.forecast.simpleforecast.forecastday],
  //       current: data
  //     })
  //   }).
  //   catch("Please enter a valid city and state");


  render() {
    if(this.state.hourlyCards && this.state.tenDay) {
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
            <HourlyContainer>
            {
              cleaner.get10Day().map(day => {
              return <Card city={day.weekday} condition={day.statusPic} high={day.high} low={day.low} />
              })
            }
            </HourlyContainer>
          </div>
        );
    } else {
      return <Controls />
    }
  }
}

export default App;
