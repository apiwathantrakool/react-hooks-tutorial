import React, { Component } from 'react';
import './App.css';
import Person from './components/person'

class App extends Component {

  state = {
    persons: [
      { name: 'Zaza', age: 6 },
      { name: 'Zee', age: 21 },
      { name: 'Zoe', age: 20 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Zaza', age: 97 },
        { name: 'Zee', age: 98 },
        { name: 'Zoe', age: 99 }
      ]
    })
  }

  render() {
    return (
      <div>
        <Person name='Nekky' age='22'></Person>
        <Person name='NJ' age='21'>
          So cute
        </Person>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

        <button onClick={this.switchNameHandler}>Switch Name</button>
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
