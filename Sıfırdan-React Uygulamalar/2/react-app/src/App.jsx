import Products from "./components/Products/Products";
import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [counter,setCounter]=useState(10)
  return (
    <div className="App">
      <Products />
      <Counter counter={counter} setCounter={setCounter}>
      <span>{counter}</span>
      </Counter>
    </div>
  );
};

export default App;
