import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Counter from "./Counter";
// import Batsman from "./Batsman";


function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNumber = num + 5;

    alert(newNumber);
  };

  return (
    <>
      <h3>Vite + React</h3>
 

      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick() {
          alert("clicked 2");
        }}
      >
        Click me 2
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert("click 4")}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
