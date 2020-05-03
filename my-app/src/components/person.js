import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.switchNameHandler}>
        My name is {props.name} and I am {props.age}{" "}
      </p>
      <p>{props.children}</p>
      <input onChange={props.onChangeName} value={props.name} />
    </div>
  );
};

export default person;
