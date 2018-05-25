import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import HourlyCard from './Hourly-Card.js'
import sun from './sun.png'
import data from './mock-data.js';
import HourlyContainer from './Hourly-Container.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hourlyCards: [...data.hourly_forecast],
      hourlyCardLimit: 7
    }
    this.fillHourlyCards = this.fillHourlyCards.bind(this);
  }

  fillHourlyCards() {
  let hoursObj = this.state.hourlyCards.reduce((hoursprojection, hour) => {
    if(hoursprojection.length > 7) {
        return hoursprojection;
      }
      hoursprojection.push({hour: hour.FCTTIME.hour , 
                            condition: hour.condition ,
                            icon: hour.icon_url, 
                            temp: hour.temp.english})
      return hoursprojection;
    }, [])
    return hoursObj;
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
        <HourlyContainer>
        {
          this.fillHourlyCards().map(hour => {
            return <HourlyCard hour={hour.hour} condition={hour.condition} projectedTemp={hour.temp} icon={hour.icon} />
          }) 
        }
        </HourlyContainer>
      </div>
    );
  }
}

export default App;
