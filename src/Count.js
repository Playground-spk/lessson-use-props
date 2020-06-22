import React, { useState } from "react";
import Input from "./component/Input";
import Show from "./component/Show";

function Count() {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(1);
  const [show, setShow] = useState();

  const onClickButton = () => {
    setShow(input);
    setInput("");
  };

  return (
    <div>
      <Input input={input} setInput={setInput} onClickButton={onClickButton} />
      <Show show={show} />
    </div>
  );
}

export default Count;
