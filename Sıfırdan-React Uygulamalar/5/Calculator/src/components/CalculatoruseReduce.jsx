import { useReducer } from "react";
import "./Calculator.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Number1":
      return { ...state, number1: action.payload };
    case "Set_Number2":
      return { ...state, number2: action.payload };
    case "Set_Result":
      return { ...state, result: action.payload };
    default:
      throw new Error("Invalid action type!");
  }
};

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

const CalculatoruseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //reduce fonk var initial state başlangıç verim . dispatch ile redeuce tetikleniyor.

  const handleNumber1Change = (e) => {
    dispatch({ type: "Set_Number1", payload: Number(e.target.value) });
  };
  const handleNumber2Change = (e) => {
    dispatch({ type: "Set_Number2", payload: Number(e.target.value) });
  };
  const handleAddition = () => {
    dispatch({ type: "Set_Result", payload: state.number1 + state.number2 });
  };

  return (
    <div className="calculator-container">
      <h1>useReduce</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1Change}
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
            onChange={handleNumber2Change}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
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
            value={state.result}
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatoruseReduce;
