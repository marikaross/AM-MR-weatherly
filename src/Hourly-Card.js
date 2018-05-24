import React, { Component } from 'react';

class HourlyCard extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='hourlyCard'>
        <h2>{this.props.hour}</h2>
        <h3><img src={this.props.condition}/></h3>
        <h3>{this.props.projectedTemp}</h3>
      </div>
      )
  }
}

export default HourlyCard;