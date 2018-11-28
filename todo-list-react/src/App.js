import React, { Component } from 'react';
import PostTodo from "./PostTodo"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <PostTodo />
      </div>
    );
  }
}

export default App;
