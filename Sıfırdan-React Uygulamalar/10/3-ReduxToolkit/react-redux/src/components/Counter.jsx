import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter); //index.js teki state ulaşmak için use selector kullanıldı
  const show=useSelector((state)=>state.showCounter)
  const dispatch = useDispatch(); //reducer daki actionı belirlememk yaklalamak için usedispatch kullanıldı

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increseby5Handler = () => {
    dispatch(counterActions.increaseby5({amount:5}));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.show());
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {show && counter} </b> <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increseby5Handler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrease</button>
      <button onClick={toggleCounterHandler}>Show</button>
    </main>
  );
};

export default Counter;
