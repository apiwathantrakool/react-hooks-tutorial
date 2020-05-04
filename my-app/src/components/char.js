import React from "react";

const char = (props) => {
  const { character } = props;
  return (
    <div
      style={{
        display: "inline",
        margin: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "black",
        color: "white",
      }}
    >
      {character}
    </div>
  );
};

export default char;
