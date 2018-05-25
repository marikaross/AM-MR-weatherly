import React, { Component } from 'react';

class HourlyCard extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='hourlyCard'>
        <h3>{this.props.hour}</h3>
        <h5>{this.props.condition}</h5>
        <h3><img src={this.props.icon}/></h3>
        <h2>{this.props.projectedTemp}</h2>
      </div>
      )
  }
}

export default HourlyCard;