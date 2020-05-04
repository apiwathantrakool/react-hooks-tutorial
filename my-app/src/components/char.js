import React from "react";

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
      }}
      onClick={onClick}
    >
      {character}
    </div>
  );
};

export default char;
