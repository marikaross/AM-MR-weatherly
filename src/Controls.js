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
    
    // this.setState({
    //   showWeather: true
    // })
    // let clearskys;
    // if(this.state.showWeather) {
    //   clearskys = null; 
    // } else {
    //   clearskys = "forecast";
    // }
    
  }


  
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter your city"/>
        <button onClick={this.showWeather}>Submit</button> 
      </div>
      )
  }
}