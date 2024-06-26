import {createSlice ,configureStore} from "@reduxjs/toolkit"

const initialState = {
  counter: 2,
  showCounter: false,
};

const counterSlice= createSlice({
  name:"counter",
  initialState,
  reducers:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--;
    },
    increaseby5(state,action){
      state.counter=state.counter+action.payload.amount
    },
    show(state){
      state.showCounter=!state.showCounter
    }
  }
})

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "Increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "Increaseby5") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//   if (action.type === "Decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "Show") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer:counterSlice.reducer
});

export const counterActions=counterSlice.actions


export default store;
