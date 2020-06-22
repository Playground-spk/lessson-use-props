import React, { useState } from "react";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => props.setInput(e.target.value)}
        value={props.input}
      />
      <button onClick={props.onClickButton}> summit</button>
    </div>
  );
}

export default Input;
