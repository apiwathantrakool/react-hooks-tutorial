import React from "react";
import "./person.css";

const person = (props) => {
  const { name, age, onChangeName } = props;
  const txtStyleClasses = getTxtStyleClasses(name);
  return (
    <div>
      <p className={txtStyleClasses}>
        My name is {name} and I am {age}
      </p>
      <p>{props.children}</p>
      <input onChange={onChangeName} value={name} />
    </div>
  );
};

const getTxtStyleClasses = (name) => {
  const txtStyle = [];
  if (name.length >= 5) {
    txtStyle.push("text-bold");
  }
  if (name.length >= 10) {
    txtStyle.push("background-red");
  }
  // className="text-bold background-red"
  return txtStyle.join(" ");
};

export default person;
