import React, { Component } from 'react';

class LightSwich extends Component {
  constructor() {
    super()
    this.state = {
      power: false
    }
  }

  render() {
    return (
      <div>
        {this.state.power ? 'ON' : 'OFF'}
      </div>
    )
  }
}
export default LightSwich