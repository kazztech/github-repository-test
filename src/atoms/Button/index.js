import React from "react";

function Button(props) {
  return (
    <button
      style={{
        padding: props.size === "large" ? "8px 4px" : "4px"
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
