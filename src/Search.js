import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Example search" 
          value={this.state.userInput}
          onChange={(event) => {
          this.setState({
          userInput: event.target.value
       
        })}} />
        <button onClick={() => 
          {this.props.fetchWeather(this.state.userInput)}}
        >Submit</button> 
      </div>
      )
  }
}


