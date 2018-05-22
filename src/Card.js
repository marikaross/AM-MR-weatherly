import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="weatherCard">
        <h2>{this.props.city}</h2>
        <h3><img src={this.props.condition} alt={this.props.description} /></h3>
        <h3>{this.props.currentTemp}</h3>
        <h3>{this.props.highLow}</h3>
        <p>{this.props.summary}</p>
      </div>
    )

  }
}

export default Card;