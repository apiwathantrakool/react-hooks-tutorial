import React, { Component } from 'react';
import './App.css';
import Person from './components/person'

class App extends Component {
  render() {
    return (
      <div>
        <Person name='Nekky' age='22'></Person>
        <Person name='NJ' age='21'></Person>
      </div>
    /* return React.createElement('div', null, 
                React.createElement('h1',null, Hi) , 'Hello Worl'); */
  
    // JSX compile, React will complie the HTML code to JS code by using
    // the comment code above.
  
    // JSX return, React will require wrapping html, because when it complie to JS.
    // It will compile DOM to be nested JS like code above.
   );
  }
}

export default App;
