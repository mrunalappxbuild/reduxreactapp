import { createStore} from 'redux';
// import { createSlice , configureStore } from '@reduxjs/toolkit';

 const initialState = { counter:0 ,showCounter: true};

// const counterSlice = createSlice({
//    name:'counter',
//    initialState,
//    reducers:{
//       increment(state) {
//          state.counter++;
//       } ,
//       decrement(state) {
//          state.counter--;
//       },
//       plusFive(state , action) {
//          state.counter = state.counter + action.payload;
//       },
//       toggleCounter(state) {
//          state.showCounter = !state.showCounter;
//       }
//    }

// });

const counterReducer = ( state = initialState, action)=>{
   if (action.type === 'increment'){
   return {counter:state.counter + 1 , showCounter: state.showCounter}
   }else if (action.type==='decrement'){
    return {counter:state.counter-1 , showCounter: state.showCounter}
   }else if (action.type==='plusFive'){
    return{counter:state.counter + action.payload , showCounter: state.showCounter}
   }else if (action.type==='toggle'){
      return {showCounter:!state.showCounter , counter: state.counter}
   }
   else{
    return state;
   }
}
const store = createStore (counterReducer)



// const store = configureStore ({
//    counter: counterSlice.reducer 
// });


// export const counterActions = counterSlice.actions;

export default store;