import React, { Component } from 'react';
import Friend from "./Friend"
import FriendList from "./FriendList";
import Pet from "./Pet"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Friend />
        <FriendList />
        <Pet />
      </div>
    );
  }
}

export default App;
