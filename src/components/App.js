import React, { Component } from 'react';

import Header from "./Header"
import MemesContainer from "./MemesContainer"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemesContainer />
      </div>
    );
  }
}

export default App;
