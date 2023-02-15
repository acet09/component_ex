import React, { Component } from 'react';

class LightSwich extends Component {
  constructor() {
    super()
    this.handelClick = this.handelClick.bind(this)
    this.state = {
      power: false
    }
  }

  handelClick() {
    this.setState({
      power: !this.state.power
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.power ? 'ON' : 'OFF'}</p>
        <button onClick={this.handelClick}>Swich</button>
      </div>
    )
  }
}
export default LightSwich