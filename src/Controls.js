import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      showWeather: false,
    }
    this.showWeather = this.showWeather.bind(this)
  }

  showWeather() {
    this.setState({
      showWeather: this.state.showWeather
    })
  }
  
  render() {
    return (
      <div>
        <input type="text" placeHolder="Enter your city"/>
        <button>Submit</button> 
      </div>
      )
  }
}