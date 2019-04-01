import React, { useState } from 'react';
import './App.css';
import Person from './components/person'

const app = props => {

  const [ personsState, setPersonsState  ] = useState({
    persons: [
      { name: 'Zaza', age: 6 },
      { name: 'Zee', age: 21 },
      { name: 'Zoe', age: 20 }
    ]
  })

  const [ otherState, setOtherState ] = useState({
    otherState: 'some other value'
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Zaza', age: 97 },
        { name: 'Zee', age: 98 },
        { name: 'Zoe', age: 99 }
      ]
    })

    setOtherState({
      otherState: 'something change'
    })
  }

  console.log(personsState, otherState);

  return (
    <div>
      <Person name='Nekky' age='22'></Person>
      <Person name='NJ' age='21'>
        So cute
        </Person>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />

      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
}

export default app;
