import React, { useState } from "react";

function App() {
  const [inputVal, setInput] = useState("");
  const [items, setItemsList] = useState([]);

  function handleInput(event) {
    const { value } = event.target;
    setInput(value);
    //console.log(inputVal);
  }
  function addInput() {
    // setInput()
    console.log(inputVal);
    //items.push(inputVal);
    setItemsList((prevArray) => {
      return [...prevArray, inputVal];
    });
    console.log(items);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" />
        <button onClick={addInput}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
