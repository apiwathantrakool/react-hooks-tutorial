import React from "react";

const person = (props) => {
  const { name, age, onChangeName } = props;
  return (
    <div>
      <p>
        My name is {name} and I am {age}
      </p>
      <p>{props.children}</p>
      <input onChange={onChangeName} value={name} />
    </div>
  );
};

export default person;
