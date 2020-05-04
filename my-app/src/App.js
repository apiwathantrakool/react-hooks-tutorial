import React, { useState } from "react";
import "./App.css";
import Person from "./components/person";
import Char from "./components/char";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "p01", name: "Zaza", age: 6 },
      { id: "p02", name: "Zee", age: 21 },
      { id: "p03", name: "Zoe", age: 20 },
    ],
  });

  const onChangeName = (event, id) => {
    // Get target index
    const personIndex = personsState.persons.findIndex((person) => {
      return person.id === id;
    });

    // Clone target and update new value
    const updatedPerson = { ...personsState.persons[personIndex] };
    updatedPerson.name = event.target.value;

    // Clone entire list and update new data
    const updatedPersonList = [...personsState.persons];
    updatedPersonList[personIndex] = updatedPerson;

    setPersonsState({
      persons: updatedPersonList,
    });
  };

  const onClickChar = (personId, characterIndex) => {
    // Get target index
    const personIndex = personsState.persons.findIndex((person) => {
      return person.id === personId;
    });

    // Clone target and update new value
    const updatedPerson = { ...personsState.persons[personIndex] };
    const nameCharacters = updatedPerson.name.split(
      "",
      updatedPerson.name.length
    );
    const updateNameCharacters = nameCharacters.filter((val, key) => {
      return key !== characterIndex;
    });
    updatedPerson.name = updateNameCharacters.join("");

    // Clone entire list and update new data
    const updatedPersonList = [...personsState.persons];
    updatedPersonList[personIndex] = updatedPerson;

    setPersonsState({
      persons: updatedPersonList,
    });
  };

  const renderPersonList = (personData) => {
    return personData.map((val) => {
      return (
        <div>
          <Person
            key={val.id}
            name={val.name}
            age={val.age}
            onChangeName={(event) => onChangeName(event, val.id)}
          />
          {renderCharList(val.id, val.name)}
        </div>
      );
    });
  };

  const renderCharList = (personId, name) => {
    const nameCharacters = name.split("", name.length);
    return nameCharacters.map((char, key) => {
      return (
        <Char character={char} onClick={() => onClickChar(personId, key)} />
      );
    });
  };

  return <div>{renderPersonList(personsState.persons)}</div>;
};

export default App;
