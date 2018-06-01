import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
    this.getInput = this.getInput.bind(this)
  }

  getInput(event) {
  this.setState(
    {userInput: event.target.value}
    )
  }

  


  render() {
    return (
      <div className="search">
        <h1 className="title">Weatherly</h1>
        <input 
          type="text" 
          placeholder="Example search" 
          value={this.state.userInput}
          onChange={this.getInput}
         />
        <button onClick={(event) => {
          event.preventDefault()
          this.props.fetchWeather(this.state.userInput)
        }}

        >Submit</button> 
      </div>
      )
  }
}


