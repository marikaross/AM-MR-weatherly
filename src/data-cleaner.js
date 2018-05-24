import React from 'react';
import data from './mock-data.js';

export default function getCurrentData(data) {

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