import React, { Component } from 'react';

class CurrentWeather extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="weatherCard">
        <h2>{this.props.city}</h2>
        <h3><img src={this.props.condition} alt={this.props.description} /></h3>
        <h3>{this.props.currentTemp}</h3>
        <h3 className="highLow">{this.props.high}</h3>/<h3 className="highLow">{this.props.low}&#8457;</h3>
        <p>{this.props.summary}</p>
      </div>
    )

  }
}

export default CurrentWeather;