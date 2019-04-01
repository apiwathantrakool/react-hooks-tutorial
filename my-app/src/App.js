import React, { useState } from 'react';
import './App.css';
import Person from './components/person'

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Zaza', age: 6 },
      { name: 'Zee', age: 21 },
      { name: 'Zoe', age: 20 }
    ]
  })

  const [otherState, setOtherState] = useState({
    otherState: 'some other value'
  })

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 97 },
        { name: newName, age: 98 },
        { name: newName, age: 99 }
      ]
    })

    setOtherState({
      otherState: 'something change'
    })
  }

  console.log(personsState, otherState);

  return (
    <div>
      <Person name='NJ' age='21'>
        So cute
      </Person>

      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
        switchNameHandler={switchNameHandler.bind(this, "Bind 1")} />

      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        switchNameHandler={switchNameHandler.bind(this, "Bind 2")} />

      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
        switchNameHandler={()=> switchNameHandler("Arg via ()=> function")} />

    </div>
  );
}

export default app;
