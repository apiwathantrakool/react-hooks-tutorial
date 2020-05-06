import React from "react";
import Radium from "radium";

const char = (props) => {
  const { character, onClick } = props;
  return (
    <div
      style={{
        display: "inline",
        margin: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "black",
        color: "white",
        ":hover": {
          backgroundColor: "red",
        },
      }}
      onClick={onClick}
    >
      {character}
    </div>
  );
};

export default Radium(char);
