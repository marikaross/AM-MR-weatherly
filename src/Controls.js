import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter your city" onChange={(event) => {
          this.setState({
          userInput: event.target.value
        })}}/>
        <button onClick={this.props.onClick}>Submit</button> 
      </div>
      )
  }
}