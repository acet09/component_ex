import React, { Component } from 'react';
import Profile from './Profile';
import LightSwich from './LightSwich';

class App extends Component {
  render() {
    return (
      <div>
        <LightSwich></LightSwich>
        <Profile></Profile>
      </div>
    );
  }
}

export default App;
