import React from 'react';
import styles from './person.module.css';

const person = (props) => {
  const { name, age, onChangeName } = props;
  const txtStyle = getTxtStyleClasses(name);
  return (
    <div>
      <p className={txtStyle}>
        My name is {name} and I am {age}
      </p>
      <p>{props.children}</p>
      <input
        className={styles[`text-bold`]}
        onChange={onChangeName}
        value={name}
      />
    </div>
  );
};

const getTxtStyleClasses = (name) => {
  const isBold = name.length >= 5;
  const isBgRed = name.length >= 10;
  return `${isBold ? styles['text-bold'] : ''} ${
    isBgRed ? styles['background-red'] : ''
  }`;
};

export default person;
