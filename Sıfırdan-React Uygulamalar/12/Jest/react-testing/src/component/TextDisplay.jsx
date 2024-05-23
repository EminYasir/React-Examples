import React, { useState } from "react";

const TextDisplay = () => {
  const [changedtext, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changedtext);
  };

  return (
    <div>
      <h2>Hello Word</h2>
      {!changedtext && <p>How are you ?</p>}
      {changedtext && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default TextDisplay;
