import React, { useState } from "react";

function Show(props) {
  return (
    <div>
      <div>this is show value</div>
      {props.show}
    </div>
  );
}

export default Show;
