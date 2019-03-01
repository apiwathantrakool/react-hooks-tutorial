import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World</p>
        </header>
      </div>
    /* return React.createElement('div', null, 'Hello Worl'); */
    // JSX, React will complie the HTML code to JS code by using
    // the comment code above.
   );
  }
}

export default App;
