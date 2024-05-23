const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if(action.type ==="Increment"){
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type ==="Decrement") {
    return {
      counter: state.counter - 2,
    };
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber=()=>{
  const latestState=store.getState();//sotre daki sondurum
  console.log(latestState);
}

store.subscribe(counterSubscriber);//store daki hareketleri günceller

store.dispatch({type:"Increment"});
store.dispatch({type:"Decrement"});