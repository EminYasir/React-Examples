import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);//store de birden fazlaolduğu için counter ı ekleyerek ne olduğunu belirtiyorum
  const showCounter = useSelector((state) => state.counter.showCounter);
  const { increment, increase, decrement, toggleCounter } = counterActions;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase({ amount: 5 }));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
