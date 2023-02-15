import React, { Component } from 'react';
import Taro from './Taro';
import ShowName from './ShowName';

class App extends Component {
  render() {
    return (
      <div>
        <Taro></Taro>
        <Taro></Taro>
        <Taro></Taro>
        <Taro></Taro>
        <ShowName></ShowName>
      </div>
    );
  }
}

export default App;
