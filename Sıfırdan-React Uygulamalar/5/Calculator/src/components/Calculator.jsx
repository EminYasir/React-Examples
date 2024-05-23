import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number1, setnumber1] = useState();
  const [number2, setnumber2] = useState();
  const [result, setResult] = useState();

  const Calculut = () => {
    setResult(number1 + number2);
  };

  const number1Handler = (e) => {
    setnumber1(Number(e.target.value));
  };
  const number2Handler = (e) => {
    setnumber2(Number(e.target.value));
  };

  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            value={number1}
            onChange={number1Handler}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            value={number2}
            onChange={number2Handler}
          />
        </div>
        <button className="form-button" onClick={Calculut}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={result}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
