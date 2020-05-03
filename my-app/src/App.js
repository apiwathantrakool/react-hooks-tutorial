import React, { useState } from "react";
import "./App.css";
import Person from "./components/person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Zaza", age: 6 },
      { name: "Zee", age: 21 },
      { name: "Zoe", age: 20 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value",
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 97 },
        { name: newName, age: 98 },
        { name: newName, age: 99 },
      ],
    });
    setOtherState({
      otherState: "something change",
    });
  };

  const onChangeName = (event) => {
    setPersonsState({
      persons: [
        ...personsState.persons,
        (personsState.persons[event.target.id].name = event.target.value),
      ],
    });
  };

  return (
    <div>
      <Person
        index={0}
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        switchNameHandler={switchNameHandler.bind(this, "Bind 1")}
        onChangeName={onChangeName.bind(this)}
      />

      <Person
        index={1}
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        switchNameHandler={switchNameHandler.bind(this, "Bind 2")}
        onChangeName={onChangeName.bind(this)}
      />

      <Person
        index={2}
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        switchNameHandler={() => switchNameHandler("Arg via ()=> function")}
        onChangeName={onChangeName.bind(this)}
      />
    </div>
  );
};

export default app;
